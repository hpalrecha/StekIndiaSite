import FormulaSubpageLayout from "@/components/layout/FormulaSubpageLayout";
import { FORMULA_PRODUCTS } from "@/lib/constants";

export default function FormulaInstall() {
    const products = FORMULA_PRODUCTS.filter(p => p.category === 'install');

    return (
        <FormulaSubpageLayout
            title="FILM INSTALLATION"
            subtitle="Performance-Driven Installation Solutions"
            category="install"
            products={products}
        />
    );
}
