const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sekolahSchema = new Schema({
    nomorinduksiswa:{
        type: String
        },
        namasiswa:{
            type: String
        },
        jeniskelamin:{
            type: String
        },
        biayaperbulan:{
            type: String
        },
        jumlahpembayaran:{
            type: String
        },
        totalpembayaran:{
            type: String
        }
})
module.exports =mongoose.model('sekolah',sekolahSchema)