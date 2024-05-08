import bcrypt from 'bcryptjs'
import Mongoose from 'mongoose'

const schema = new Mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		password: String
	},
	{
		timestamps: true
	}
)

schema.methods.fullName = function () {
	return `${this.firstName} ${this.lastName}`
}

schema.methods.verifyPassword = async function (password) {
	return await bcrypt.compare(password, this.password)
}

schema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 10)
})

const User = Mongoose.model('User', schema)

export default User
