import FormulaSubpageLayout from "@/components/layout/FormulaSubpageLayout";
import { FORMULA_PRODUCTS } from "@/lib/constants";

export default function FormulaPrep() {
    const products = FORMULA_PRODUCTS.filter(p => p.category === 'prep');

    return (
        <FormulaSubpageLayout
            title="CLEANING, PREP & DECONTAMINATION"
            subtitle="Professional Results Start with the Right Foundation"
            category="prep"
            products={products}
        />
    );
}
