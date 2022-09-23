import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = []
        this._brands = []
        this._sizes = [
            {id: 1, name: "XS"},
            {id: 2, name: "S"},
            {id: 3, name: "M"},
            {id: 4, name: "L"},
            {id: 5, name: "Xl"},
            {id: 6, name: "XXL"},
        ]
        this._items = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedSize = {}
        this._page = 1;
        this._tottalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedSize(size) {
        this._selectedSize = size;
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._tottalCount = totalCount
    }

    setSelectedBrand(brand) {
        this.setPage(1)
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

    get selectedSize() {
        return this._selectedSize
    }

    get totalCount() {
        return this._tottalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}
