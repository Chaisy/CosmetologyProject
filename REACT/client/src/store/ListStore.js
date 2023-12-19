import {makeAutoObservable} from 'mobx'

export default class ListStore {
    constructor() {
        this._animals = [
            // {id: 1, name: 'Ivan', admission: '2023-12-01', birth: '2008-05-06', image: 'https://i.pinimg.com/564x/27/66/59/2766596b82b54f0071289811442a66aa.jpg', description: 'Serious', informationId: 2, placementId: 1},
            // {id: 2, name: 'Molly', admission: '2021-05-01', birth: '2011-05-06', image: 'https://koshka.top/uploads/posts/2021-11/thumbs/1638007636_47-koshka-top-p-ushi-lva-62.jpg', description: 'Lovely', informationId: 1, placementId: 2},
            // {id: 3, name: 'Jake', admission: '2018-05-05', birth: '2010-05-06', image: 'https://i.pinimg.com/564x/1e/f7/32/1ef7323170668410ab239e4fab10ad54.jpg', description: 'Smart', informationId: 3, placementId: 3},
            // {id: 4, name: 'Bublik', admission: '2022-11-30', birth: '2009-05-06', image: 'https://i.pinimg.com/564x/83/9c/c3/839cc36fcb826cdb81a100ef5e5a0f81.jpg', description: 'Handsome', informationId: 1, placementId: 2},
            // {id: 5, name: 'Ilina', admission: '2023-01-01', birth: '2023-05-06', image: 'https://i.pinimg.com/564x/a2/12/78/a212787866faebb393fb5d533a2373cb.jpg', description: 'Beatiful', informationId: 3, placementId: 3},
            // {id: 6, name: 'Rubius', admission: '2008-05-05', birth: '2012-05-06', image: 'https://i.pinimg.com/564x/a9/07/36/a90736e7dd17e691958e79014f3ad28d.jpg', description: 'Poor', informationId: 1, placementId: 2},
            // {id: 7, name: 'Goga', admission: '2009-05-05', birth: '2007-05-06', image: 'https://i.pinimg.com/564x/a5/90/47/a59047b2fdd631b8114d875115be2878.jpg', description: 'Cute', informationId: 3, placementId: 3},
            // {id: 8, name: 'Lima', admission: '2009-05-05', birth: '2006-05-06', image: 'https://i.pinimg.com/564x/ed/1f/ce/ed1fcee098d851d30f420b96e373ab52.jpg', description: 'Angry', informationId: 2, placementId: 1},
            // {id: 9, name: 'Manka', admission: '2017-05-05', birth: '2005-05-06', image: 'https://i.pinimg.com/564x/b6/4c/3e/b64c3ecb77d66120f8a4618ff94788ea.jpg', description: 'Funny', informationId: 2, placementId: 1}
        ]
        this._placements = [
            // {id: 1, name: 'Ocean', area: 250.0},
            // {id: 2, name: 'Safari', area: 300.0},
            // {id: 3, name: 'Mountain', area: 200.0}
        ]
        this._informations = [
            // {id: 1, species: 'lion', animal_class: 'mammal'},
            // {id: 2, species: 'shark', animal_class: 'fish'},
            // {id: 3, species: 'eagle', animal_class: 'bird'}
        ]

        this._selectedPlacement = {}
        this._selectedInformation = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 6
        this._search = ''

        makeAutoObservable(this)
    }

    setAnimals(animals) {
        this._animals = animals
    }
    setPlacements(placements) {
        this._placements = placements
    }
    setInformations(informations) {
        this._informations = informations
    }

    setSelectedPlacement(placement) {
        this._selectedPlacement = placement
        this._page = 1
    }
    setSelectedInformation(information) {
        this._selectedInformation = information
        this._page = 1
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
    }
    setSearch(search) {
        this._search = search
        this._page = 1
    }

    get animals() {
        return this._animals
    }
    get placements() {
        return this._placements
    }
    get informations() {
        return this._informations
    }

    get selectedPlacement() {
        return this._selectedPlacement
    }
    get selectedInformation() {
        return this._selectedInformation
    }

    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
    get search() {
        return this._search
    }
}