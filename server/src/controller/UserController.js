const creacteUser = async (res, req)=>{
   try {
     const {name, email, password, comfirmPassword} = rep.body
     const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
     if(!email || !password ||!comfirmPassword){
        return res.status(200).json({
             status:"ERR",
             message :"the input is require"
        })
     }
     if (!isCheckEmail){
         return res.status(200).json({
            status: "ERR",
            message:'email is not in correct format'
         })
     }
     if (password !== comfirmPassword){
        return  res.status(200).json({  
            status:"ERR",
            message:" The password is equal confirmPassword"
     })
    }
     const response = await UserService.creacteUser(req.body)
     return res.status(200).json(response)
   } catch (error) {
    return res.status(404).json({
        message:error
    })
   }
}