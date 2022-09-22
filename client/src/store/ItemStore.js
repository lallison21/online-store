import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = []
        this._brands = []
        this._sizes = [
            {id: 1, name: "S"},
            {id: 2, name: "M"},
            {id: 3, name: "L"},
            {id: 4, name: "Xl"},
            {id: 5, name: "XXL"},
        ]
        this._items = []
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
