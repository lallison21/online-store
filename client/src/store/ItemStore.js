import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: "Толстовки"},
            {id: 2, name: "Водолазки"},
            {id: 3 ,name: "Брюки"},
        ]
        this._brands = [
            {id: 1,name: "BOSS"},
            {id: 2,name: "POLO"},
        ]
        this._sizes = [
            {id: 1,name: "L"},
            {id: 2,name: "M"},
        ]
        this._items = [
            {id: 1, name: "Водолазка POLO чёрная", price: 1999, rating: 0, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 2, name: "Водолазка BOSS чёрная", price: 2999, rating: 0, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 3, name: "Толстовка BOSS черная", price: 2999, rating: 0, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 4, name: "Толстовка POLO черная", price: 2999, rating: 0, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
            {id: 5, name: "Толстовка POLO белая", price: 2999, rating:0, img: "https://vipavenue.ru/upload/catalog_photos/c4d/c4de643f9bd03c539bc140c13e0bab29.jpg"},
        ]
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
}
