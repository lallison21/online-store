import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: "Толстовки"},
            {id: 2, name: "Водолазки"},
            {id: 3, name: "Брюки"},
            {id: 4, name: "Куртки"},
            {id: 5, name: "Брюки"},
            {id: 6, name: "Кросовки"},
        ]
        this._brands = [
            {id: 1, name: "BOSS"},
            {id: 2, name: "POLO"},
            {id: 3, name: "ADIDAS"},
            {id: 4, name: "NIKE"},
        ]
        this._sizes = [
            {id: 1, name: "S"},
            {id: 2, name: "M"},
            {id: 3, name: "L"},
            {id: 4, name: "Xl"},
            {id: 5, name: "XXL"},
        ]
        this._items = [
            {id: 1, name: "Водолазка POLO чёрная", price: 1999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 2, name: "Водолазка BOSS чёрная", price: 2999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 3, name: "Толстовка BOSS черная", price: 2999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 4, name: "Толстовка POLO черная", price: 2999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 5, name: "Толстовка POLO белая", price: 2999, rating: 5, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setSizes(sizes) {
        this._sizes = sizes
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get sizes() {
        return this._sizes
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
