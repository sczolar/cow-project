
import users from "../../db/users.json"


export default function handler(req, res) {
    const { token } = JSON.parse(req.body)
    if (token) {
        const user = users.users.filter(a => (a.token === token ? a : 0))
        if (user.length) {
            res.status(200).json({ message: "user alive", data: user, success: true })
        } else {
            res.status(400).json({ message: "user not found", success: false })
        }
    }
    else {
        res.status(400).json({ message: "token not found", success: false })
    }

}
