export interface sliderDataType {
    id: number
    image: string
    title: string
    paragraph: string
    link: string
}

export interface heroCategoriesData {
    createdAt: string
    icon: string
    _id: number
    image: string
    name: string
    updatedAt: string
}

export interface Iproduct {
    brand_id: string
    category: {
        id: number
        name: string
        image: string
        icon: string
        parentCategoryId: null
    }
    category_id: string
    createdAt: string
    description: string
    id: number
    image: string
    is_aksiya: boolean
    is_liked: boolean
    name: string
    nasiya: string
    price: number
    rating: number
    summary: string
    updatedAt: string
}

export interface Ibrands {
    createdAt: string
    icon: string
    id: number
    image: string
    name: string
    parentCategoryId: null
    updatedAt: string
}

export interface ProductsResponse {
  items: Iproduct[];
}