import { Button } from "antd";
import Link from "next/link";


const ProductsHomePage = () => {
    return (
        <div>
            <h1>This is products home page</h1>
            <Button type="primary"><Link href="/">Home</Link></Button>
        </div>
    );
};

export default ProductsHomePage;