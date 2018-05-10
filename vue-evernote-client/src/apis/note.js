import request from '@/helpers/request'
import {friendlyDate} from'@/helpers/util'

const URL = {
    GET: '/notes/from/:notebookId',
    ADD: '/notes/to/:notebookId',
    DELETE: '/notes/:noteId',
    UPDATE: '/notes/:noteId'
}

export default {
    getAll({notebookId}) {
        return new Promise((resolve,reject) => {
            request(URL.GET.replace(':notebookId',notebookId)).then(res => {
                let noteTime = res.data.map(note => {
                    note.createdAtFriendly = friendlyDate(note.createdAt);
                    note.updatedAtFriendly = friendlyDate(note.updatedAt);
                    return note
                }).sort((note1,note2) => {
                    note1.updatedAt < note2.updatedAt
                })
                // res.data = res.data.sort((note1,note2) => note1.createdAt < note2.createdAt)
                // res.data.forEach(note => {
                //     note.friendlyCreatedAt = friendlyDate(note.createdAt)
                // })
                console.log(res)
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })
    },
    updateNote({noteId},{title,content}) {
        return request(URL.UPDATE.replace(':noteId',noteId),'PATCH',{title,content})
    },
    updateNote({noteId}) {
        return request(URL.UPDATE.replace(':noteId',noteId),'DELETE')
    },
    addNoteBook({notebookId},{title = '',content = ''} = {title: '',content: ''}) {
        return request(URL.ADD.replace(':notebookId',notebookId),'POST',{title,content})
    }
}