import {makeAutoObservable} from "mobx";

export default class PersonAuth {
    constructor() {
        this._persons = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

   
    setPersons(persons) {
        this._persons = persons
    }

   
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    
    get persons() {
        return this._persons
    }
    
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}