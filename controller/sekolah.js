const sekolahModel = require ('../model/sekolah')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    sekolahModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'input pembelian sukses'
    })).catch (() => reject({
        status : false,
        pesan: 'input pembelian gagal'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    sekolahModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' pembaruan sukses ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'pembaruan gagal',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    sekolahModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'sukses menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    sekolahModel.findOne({
        _id: objectid(id)
      }).then (result =>{
        resolve({
          status : true,
          pesan : 'sukses menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      sekolahModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'penghapusan sukses',
        })).catch(()=> reject ({
        status : false,
        pesan : 'penghapusan gagal',
        }))
    })