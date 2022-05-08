// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import users from "../../db/users.json"


export default function handler(req, res) {
  const { username, password } = JSON.parse(req.body);
  if (username && password) {
    console.log(username, password)
    console.log(users.users)
    const user = users.users.filter(a => (a.name === username && a.password === password ? a : 0))
    console.log(user.length)
    if (user.length) {
      res.status(200).json({ message: "user alive", data: user, success: true })
    } else {
      res.status(400).json({ message: "user not found", success: false })
    }

  }
  else {
    res.status(400).json({ message: "All fields required", success: false })
  }

}
