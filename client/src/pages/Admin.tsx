import { useState, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Mail, Phone, Calendar, User, FileText, Plus, Pencil, Trash2, Eye, EyeOff, MessageSquare, Newspaper, LayoutDashboard, Lock, LogOut, Upload, Package, MapPin, GraduationCap } from "lucide-react";
import type { ContactSubmission, BlogPost, InsertBlogPost, Product, InsertProduct, TrainingProgram, InsertTrainingProgram } from "@shared/schema";

const blogCategories = ["News", "Products", "Education", "Events", "Tips & Tricks"];
const brands = ["DYNO", "Lunarray", "Forceshield", "STEK"];
const productCategories = ["Paint Protection Film", "Window Film", "Windshield Film"];

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const { data: authData, isLoading: authLoading } = useQuery<{ isAuthenticated: boolean }>({
    queryKey: ["/api/auth/check"],
  });

  const isAuthenticated = authData?.isAuthenticated;

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <AdminDashboard activeTab={activeTab} setActiveTab={setActiveTab} />;
}

function LoginPage() {
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast({ title: "Login successful" });
        queryClient.invalidateQueries({ queryKey: ["/api/auth/check"] });
      } else {
        toast({ title: data.error || "Login failed", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Login failed", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <img src="/logo-dark.png" alt="STEK INDIA" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                data-testid="input-username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                data-testid="input-password"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading} data-testid="button-login">
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminDashboard({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const { toast } = useToast();

  const { data: contacts = [], isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contacts"],
  });

  const { data: blogPosts = [], isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/admin"],
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/admin"],
  });

  const { data: trainingPrograms = [], isLoading: trainingLoading } = useQuery<TrainingProgram[]>({
    queryKey: ["/api/training-programs/admin"],
  });

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/auth/check"] });
      toast({ title: "Logged out successfully" });
    } catch (error) {
      toast({ title: "Logout failed", variant: "destructive" });
    }
  };

  const publishedPosts = blogPosts.filter(p => p.published).length;
  const draftPosts = blogPosts.filter(p => !p.published).length;
  const publishedProducts = products.filter(p => p.published).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-zinc-900 text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo-light.png" alt="STEK INDIA" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold">Admin Portal</h1>
              <p className="text-gray-400 text-sm mt-1">Manage your website content</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="text-white border-white hover:bg-white hover:text-zinc-900" data-testid="button-logout">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-lg">
            <TabsTrigger value="dashboard" className="flex items-center gap-2" data-testid="tab-dashboard">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="enquiries" className="flex items-center gap-2" data-testid="tab-enquiries">
              <MessageSquare className="h-4 w-4" />
              Enquiries
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2" data-testid="tab-products">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2" data-testid="tab-blog">
              <Newspaper className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2" data-testid="tab-training">
              <GraduationCap className="h-4 w-4" />
              Training
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab
              contactsCount={contacts.length}
              publishedPosts={publishedPosts}
              draftPosts={draftPosts}
              productsCount={publishedProducts}
              trainingCount={trainingPrograms.length}
              onNavigate={setActiveTab}
            />
          </TabsContent>

          <TabsContent value="enquiries">
            <EnquiriesTab contacts={contacts} isLoading={contactsLoading} />
          </TabsContent>

          <TabsContent value="products">
            <ProductsTab products={products} isLoading={productsLoading} />
          </TabsContent>

          <TabsContent value="blog">
            <BlogTab posts={blogPosts} isLoading={postsLoading} />
          </TabsContent>

          <TabsContent value="training">
            <TrainingTab programs={trainingPrograms} isLoading={trainingLoading} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function DashboardTab({
  contactsCount,
  publishedPosts,
  draftPosts,
  productsCount,
  trainingCount,
  onNavigate
}: {
  contactsCount: number;
  publishedPosts: number;
  draftPosts: number;
  productsCount: number;
  trainingCount: number;
  onNavigate: (tab: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="cursor-pointer hover-elevate"
          onClick={() => onNavigate("enquiries")}
          data-testid="card-enquiries-summary"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Contact Enquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactsCount}</div>
            <p className="text-xs text-muted-foreground">Total submissions</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover-elevate"
          onClick={() => onNavigate("products")}
          data-testid="card-products-summary"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productsCount}</div>
            <p className="text-xs text-muted-foreground">Published products</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover-elevate"
          onClick={() => onNavigate("training")}
          data-testid="card-training-summary"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Training Programs</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{trainingCount}</div>
            <p className="text-xs text-muted-foreground">Active sessions</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover-elevate"
          onClick={() => onNavigate("blog")}
          data-testid="card-published-posts"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Published Posts</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedPosts}</div>
            <p className="text-xs text-muted-foreground">Live on blog</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover-elevate"
          onClick={() => onNavigate("blog")}
          data-testid="card-draft-posts"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Draft Posts</CardTitle>
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{draftPosts}</div>
            <p className="text-xs text-muted-foreground">Unpublished</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button onClick={() => onNavigate("enquiries")} variant="outline" data-testid="button-view-enquiries">
            <MessageSquare className="h-4 w-4 mr-2" />
            View Enquiries
          </Button>
          <Button onClick={() => onNavigate("products")} variant="outline" data-testid="button-manage-products">
            <Package className="h-4 w-4 mr-2" />
            Manage Products
          </Button>
          <Button onClick={() => onNavigate("blog")} variant="outline" data-testid="button-manage-blog">
            <Newspaper className="h-4 w-4 mr-2" />
            Manage Blog
          </Button>
          <Button onClick={() => onNavigate("training")} variant="outline" data-testid="button-manage-training">
            <GraduationCap className="h-4 w-4 mr-2" />
            Manage Training
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function EnquiriesTab({ contacts, isLoading }: { contacts: ContactSubmission[]; isLoading: boolean }) {
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <MessageSquare className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No Enquiries Yet</h3>
          <p className="text-gray-500 mt-1">Contact form submissions will appear here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Contact Enquiries</h2>
        <Badge variant="secondary">{contacts.length} total</Badge>
      </div>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            className="cursor-pointer hover-elevate"
            onClick={() => setSelectedContact(contact)}
            data-testid={`card-enquiry-${contact.id}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="font-semibold">{contact.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 flex-wrap">
                    <Mail className="h-3 w-3" />
                    <span>{contact.email}</span>
                    {contact.phone && (
                      <>
                        <span className="mx-1">|</span>
                        <Phone className="h-3 w-3" />
                        <span>{contact.phone}</span>
                      </>
                    )}
                  </div>
                  <p className="font-medium text-gray-900">{contact.subject}</p>
                  <p className="text-gray-600 text-sm line-clamp-2 mt-1">{contact.message}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    {contact.createdAt && format(new Date(contact.createdAt), "MMM d, yyyy")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Enquiry Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-gray-500">Name</Label>
                  <p className="font-medium">{selectedContact.name}</p>
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Date</Label>
                  <p className="font-medium">
                    {selectedContact.createdAt && format(new Date(selectedContact.createdAt), "PPP")}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Email</Label>
                <p className="font-medium">{selectedContact.email}</p>
              </div>
              {selectedContact.phone && (
                <div>
                  <Label className="text-xs text-gray-500">Phone</Label>
                  <p className="font-medium">{selectedContact.phone}</p>
                </div>
              )}
              <div>
                <Label className="text-xs text-gray-500">Subject</Label>
                <p className="font-medium">{selectedContact.subject}</p>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Message</Label>
                <p className="whitespace-pre-wrap bg-gray-50 p-3 rounded-md text-sm">
                  {selectedContact.message}
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" asChild>
                  <a href={`mailto:${selectedContact.email}`} data-testid="button-reply-email">
                    <Mail className="h-4 w-4 mr-2" />
                    Reply via Email
                  </a>
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProductsTab({ products, isLoading }: { products: Product[]; isLoading: boolean }) {
  const { toast } = useToast();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<Product | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [filterBrand, setFilterBrand] = useState<string>("all");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<InsertProduct>({
    name: "",
    slug: "",
    description: "",
    shortDescription: "",
    coverImage: "",
    brand: "DYNO",
    category: "Paint Protection Film",
    subcategory: "",
    features: [],
    specifications: "",
    published: false,
    displayOrder: "0",
  });
  const [featuresText, setFeaturesText] = useState("");

  const createMutation = useMutation({
    mutationFn: async (data: InsertProduct) => {
      return apiRequest("POST", "/api/products", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      setIsCreateOpen(false);
      resetForm();
      toast({ title: "Product created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create product", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<InsertProduct> }) => {
      return apiRequest("PATCH", `/api/products/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      setEditingProduct(null);
      resetForm();
      toast({ title: "Product updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update product", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      setDeleteConfirm(null);
      toast({ title: "Product deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete product", variant: "destructive" });
    },
  });

  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      return apiRequest("PATCH", `/api/products/${id}`, { published });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
    },
  });

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      shortDescription: "",
      coverImage: "",
      brand: "DYNO",
      category: "Paint Protection Film",
      subcategory: "",
      features: [],
      specifications: "",
      published: false,
      displayOrder: "0",
    });
    setFeaturesText("");
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));
  };

  const openEdit = (product: Product) => {
    setFormData({
      name: product.name,
      slug: product.slug,
      description: product.description,
      shortDescription: product.shortDescription || "",
      coverImage: product.coverImage || "",
      brand: product.brand,
      category: product.category,
      subcategory: product.subcategory || "",
      features: product.features || [],
      specifications: product.specifications || "",
      published: product.published,
      displayOrder: product.displayOrder || "0",
    });
    setFeaturesText((product.features || []).join("\n"));
    setEditingProduct(product);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev) => ({ ...prev, coverImage: data.url }));
        toast({ title: "Image uploaded successfully" });
      } else {
        const error = await res.json();
        toast({ title: error.error || "Failed to upload image", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Failed to upload image", variant: "destructive" });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.slug || !formData.description || !formData.brand || !formData.category) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    const features = featuresText.split("\n").filter(f => f.trim());
    const dataToSubmit = { ...formData, features };

    if (editingProduct) {
      updateMutation.mutate({ id: editingProduct.id, data: dataToSubmit });
    } else {
      createMutation.mutate(dataToSubmit);
    }
  };

  const filteredProducts = filterBrand === "all"
    ? products
    : products.filter(p => p.brand === filterBrand);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex items-center gap-3">
          <Select value={filterBrand} onValueChange={setFilterBrand}>
            <SelectTrigger className="w-40" data-testid="select-filter-brand">
              <SelectValue placeholder="Filter by brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => setIsCreateOpen(true)} data-testid="button-create-product">
            <Plus className="h-4 w-4 mr-2" />
            New Product
          </Button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Package className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Products Yet</h3>
            <p className="text-gray-500 mt-1">Create your first product to get started.</p>
            <Button className="mt-4" onClick={() => setIsCreateOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Product
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} data-testid={`card-product-${product.id}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1 min-w-0">
                    {product.coverImage && (
                      <img
                        src={product.coverImage}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-semibold">{product.name}</span>
                        <Badge variant={product.published ? "default" : "secondary"}>
                          {product.published ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{product.brand}</Badge>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.shortDescription || product.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => togglePublishMutation.mutate({ id: product.id, published: !product.published })}
                      title={product.published ? "Unpublish" : "Publish"}
                      data-testid={`button-toggle-publish-${product.id}`}
                    >
                      {product.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openEdit(product)}
                      data-testid={`button-edit-product-${product.id}`}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setDeleteConfirm(product)}
                      data-testid={`button-delete-product-${product.id}`}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isCreateOpen || !!editingProduct} onOpenChange={(open) => {
        if (!open) {
          setIsCreateOpen(false);
          setEditingProduct(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Create New Product"}</DialogTitle>
            <DialogDescription>
              {editingProduct ? "Update your product details." : "Fill in the details for your new product."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Enter product name"
                  data-testid="input-product-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="product-url-slug"
                  data-testid="input-product-slug"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Brand *</Label>
                <Select
                  value={formData.brand}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, brand: value }))}
                >
                  <SelectTrigger data-testid="select-product-brand">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger data-testid="select-product-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subcategory">Subcategory</Label>
              <Input
                id="subcategory"
                value={formData.subcategory || ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, subcategory: e.target.value }))}
                placeholder="e.g., Clear PPF, Matte PPF"
                data-testid="input-product-subcategory"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                value={formData.shortDescription || ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, shortDescription: e.target.value }))}
                placeholder="Brief product tagline"
                data-testid="input-product-short-desc"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Full product description..."
                rows={4}
                data-testid="input-product-description"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                placeholder="Self-healing technology&#10;10-year warranty&#10;Hydrophobic coating"
                rows={4}
                data-testid="input-product-features"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="displayOrder">Display Order</Label>
                <Input
                  id="displayOrder"
                  type="number"
                  value={formData.displayOrder || "0"}
                  onChange={(e) => setFormData((prev) => ({ ...prev, displayOrder: e.target.value }))}
                  placeholder="0"
                  data-testid="input-product-order"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="flex gap-2">
                <Input
                  value={formData.coverImage || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, coverImage: e.target.value }))}
                  placeholder="Image URL or upload an image"
                  className="flex-1"
                  data-testid="input-product-cover"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  data-testid="input-product-file-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  data-testid="button-upload-product-image"
                >
                  {isUploading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                  ) : (
                    <Upload className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {formData.coverImage && (
                <div className="mt-2 relative">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-full h-32 object-cover rounded border"
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => setFormData((prev) => ({ ...prev, coverImage: "" }))}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateOpen(false);
                setEditingProduct(null);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={createMutation.isPending || updateMutation.isPending}
              data-testid="button-save-product"
            >
              {createMutation.isPending || updateMutation.isPending ? "Saving..." : "Save Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{deleteConfirm?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteConfirm && deleteMutation.mutate(deleteConfirm.id)}
              disabled={deleteMutation.isPending}
              data-testid="button-confirm-delete-product"
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BlogTab({ posts, isLoading }: { posts: BlogPost[]; isLoading: boolean }) {
  const { toast } = useToast();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<BlogPost | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<InsertBlogPost>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: "STEK India",
    category: "News",
    published: false,
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      return apiRequest("POST", "/api/blog", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setIsCreateOpen(false);
      resetForm();
      toast({ title: "Post created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create post", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<InsertBlogPost> }) => {
      return apiRequest("PATCH", `/api/blog/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setEditingPost(null);
      resetForm();
      toast({ title: "Post updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update post", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/blog/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setDeleteConfirm(null);
      toast({ title: "Post deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete post", variant: "destructive" });
    },
  });

  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      return apiRequest("PATCH", `/api/blog/${id}`, { published });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "",
      author: "STEK India",
      category: "News",
      published: false,
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const openEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage || "",
      author: post.author,
      category: post.category,
      published: post.published,
    });
    setEditingPost(post);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev) => ({ ...prev, coverImage: data.url }));
        toast({ title: "Image uploaded successfully" });
      } else {
        const error = await res.json();
        toast({ title: error.error || "Failed to upload image", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Failed to upload image", variant: "destructive" });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <Button onClick={() => setIsCreateOpen(true)} data-testid="button-create-post">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Blog Posts Yet</h3>
            <p className="text-gray-500 mt-1">Create your first blog post to get started.</p>
            <Button className="mt-4" onClick={() => setIsCreateOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id} data-testid={`card-post-${post.id}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1 min-w-0">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-semibold">{post.title}</span>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <span>By {post.author}</span>
                        <span>|</span>
                        <span>{post.createdAt && format(new Date(post.createdAt), "MMM d, yyyy")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => togglePublishMutation.mutate({ id: post.id, published: !post.published })}
                      title={post.published ? "Unpublish" : "Publish"}
                      data-testid={`button-toggle-publish-${post.id}`}
                    >
                      {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openEdit(post)}
                      data-testid={`button-edit-post-${post.id}`}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setDeleteConfirm(post)}
                      data-testid={`button-delete-post-${post.id}`}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isCreateOpen || !!editingPost} onOpenChange={(open) => {
        if (!open) {
          setIsCreateOpen(false);
          setEditingPost(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPost ? "Edit Post" : "Create New Post"}</DialogTitle>
            <DialogDescription>
              {editingPost ? "Update your blog post details." : "Fill in the details for your new blog post."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title"
                  data-testid="input-post-title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  data-testid="input-post-slug"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the post"
                rows={2}
                data-testid="input-post-excerpt"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Full post content..."
                rows={8}
                data-testid="input-post-content"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                  placeholder="Author name"
                  data-testid="input-post-author"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger data-testid="select-post-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {blogCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="flex gap-2">
                <Input
                  value={formData.coverImage || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, coverImage: e.target.value }))}
                  placeholder="Image URL or upload an image"
                  className="flex-1"
                  data-testid="input-post-cover"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  data-testid="input-file-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  data-testid="button-upload-image"
                >
                  {isUploading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                  ) : (
                    <Upload className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {formData.coverImage && (
                <div className="mt-2 relative">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-full h-32 object-cover rounded border"
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => setFormData((prev) => ({ ...prev, coverImage: "" }))}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateOpen(false);
                setEditingPost(null);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={createMutation.isPending || updateMutation.isPending}
              data-testid="button-save-post"
            >
              {createMutation.isPending || updateMutation.isPending ? "Saving..." : "Save Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{deleteConfirm?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteConfirm && deleteMutation.mutate(deleteConfirm.id)}
              disabled={deleteMutation.isPending}
              data-testid="button-confirm-delete"
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TrainingTab({ programs, isLoading }: { programs: TrainingProgram[]; isLoading: boolean }) {
  const { toast } = useToast();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<TrainingProgram | null>(null);
  const [formData, setFormData] = useState<InsertTrainingProgram>({
    title: "",
    location: "",
    date: "",
    description: "",
    modules: [],
    image: "",
    published: true,
  });
  const [modulesText, setModulesText] = useState("");

  const createMutation = useMutation({
    mutationFn: async (data: InsertTrainingProgram) => {
      const payload = { ...data, modules: modulesText.split("\n").filter(m => m.trim()) };
      return apiRequest("POST", "/api/training-programs", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/training-programs/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/training-programs"] });
      setIsCreateOpen(false);
      resetForm();
      toast({ title: "Training program created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create training program", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/training-programs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/training-programs/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/training-programs"] });
      setDeleteConfirm(null);
      toast({ title: "Program deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete program", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      date: "",
      description: "",
      modules: [],
      image: "",
      published: true,
    });
    setModulesText("");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Training Programs</h2>
        <Button onClick={() => setIsCreateOpen(true)} data-testid="button-create-training">
          <Plus className="h-4 w-4 mr-2" />
          Add Program
        </Button>
      </div>

      {programs.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <GraduationCap className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Programs Yet</h3>
            <p className="text-gray-500 mt-1">Create your first training program session.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {programs.map((program) => (
            <Card key={program.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{program.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {program.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {program.date}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteConfirm(program)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Training Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Program Title</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                placeholder="e.g. PPF Professional Mastery"
              />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData(p => ({ ...p, location: e.target.value }))}
                placeholder="e.g. Bengaluru Training Center"
              />
            </div>
            <div className="space-y-2">
              <Label>Date / Schedule</Label>
              <Input
                value={formData.date || ""}
                onChange={(e) => setFormData(p => ({ ...p, date: e.target.value }))}
                placeholder="e.g. March 15-18, 2024"
              />
            </div>
            <div className="space-y-2">
              <Label>Modules (one per line)</Label>
              <Textarea
                value={modulesText}
                onChange={(e) => setModulesText(e.target.value)}
                placeholder="Essential tools&#10;Surface prep&#10;Advanced stretching"
                className="h-32"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button onClick={() => createMutation.mutate(formData)}>Create Program</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Program?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{deleteConfirm?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => deleteConfirm && deleteMutation.mutate(deleteConfirm.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

