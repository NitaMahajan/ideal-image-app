import { config } from "@/libs/config";

export class CategoryService {
    public static readonly SERVICE_NAME = 'Category';
    private readonly CATEGORY_URL = config.idealImage.categoryApi.url;

    public static getInstance = () => new CategoryService();

    public getCategoryData = (categoryKey: string) => {
        const url = `${this.CATEGORY_URL}?debug=true&search%5bby%5d=slug&search%5bvalue%5d=${categoryKey}&include=Category:products,Product:productAttributes,Product:bundled,Product:variations,Variation:variationAttributes&cache=true`;
        return fetch(url, {
            method: 'GET'
        }).then((r) => r.json());
    }
}