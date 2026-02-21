import FormulaSubpageLayout from "@/components/layout/FormulaSubpageLayout";
import { FORMULA_PRODUCTS } from "@/lib/constants";

export default function FormulaMaintain() {
    const products = FORMULA_PRODUCTS.filter(p => p.category === 'maintain');

    return (
        <FormulaSubpageLayout
            title="PROTECTION & MAINTENANCE"
            subtitle="Smart Protection for Every Surface"
            category="maintain"
            products={products}
        />
    );
}
