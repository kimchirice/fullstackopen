import axios from 'axios'

const personsUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(personsUrl)
    return request.then(response=>response.data)
}

const create = (newObject) => {
    const request = axios.post(personsUrl, newObject)
    return request.then(response=>response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${personsUrl}/${id}`, newObject)
    return request.then(response=>response.data)
}

const deletePerson = (id) => {
    const  request = axios.delete(`${personsUrl}/${id}`)
    return request.then(response=>response.data)
}
const personsServices = {getAll, create, update, deletePerson}
export default personsServices