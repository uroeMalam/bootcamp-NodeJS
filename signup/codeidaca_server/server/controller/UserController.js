// import bcrypt from "bcrypt";
// const SALT_ROUND = 10;

// const signup = async (req, res) => {
//   const { username, email, password, handphone } = req.body;

//   let hashPassword = password;
//   hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
//   try {
//     const result = await req.context.models.users.create(
//       {
//         user_name: username,
//         user_email: email,
//         user_password: hashPassword,
//         user_handphone: handphone,
//         user_roles: {
//           usro_role_id: 5,
//         },
//       },
//       {
//         include: req.context.models.user_roles,
//       }
//     );
//     const { user_name, user_email } = result.dataValues;
//     res.send({ user_name, user_email });
//   } catch (error) {
//     res.status(404).send(error.message);
//   }

//   /*  test dulu

//         let userPassword = user_password
//         userPassword = await bcrypt.hash(userPassword,SALT_ROUND);
//         console.log(userPassword);

//         console.log(await bcrypt.compare("rahasia",userPassword));
//         console.log(await bcrypt.compare("rahasiax",userPassword)); */
// };

// // use sigin with token in authJWT
// const signin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await req.context.models.users.findOne({
//       where: { user_email: email },
//     });
//     const { user_name, user_email, user_password } = result.dataValues;
//     const compare = await bcrypt.compare(password, user_password);
//     if (compare) {
//       return res.send({ user_name, user_email });
//     } else {
//       return res.sendStatus(404);
//     }
//   } catch (error) {
//     return res.sendStatus(404);
//   }
// };

// export default {
//   signup,
//   signin,
// };
import bcrypt from "bcrypt";
const signup = async (req, res) => {
  try {
    // insert table entity
    let resultEntity = await req.context.models.entity.create({
      entity_id: null,
    });
    // users
    const { username, password, user_phone, ponty_code, pmail_add, role_id } =
      req.body;
    const entityId = resultEntity.dataValues.entity_id;
    const salt = await bcrypt.genSalt(10);
    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, salt);
    let result = await req.context.models.users.create({
      user_entity_id: entityId,
      user_name: username,
      user_password: hashPassword,
      user_modified_date: new Date(),
    });
    // user phone
    result = await req.context.models.users_phones.create({
      uspo_entity_id: entityId,
      uspo_number: user_phone,
      uspo_ponty_code: ponty_code,
    });
    // ?users_email
    result = await req.context.models.users_email.create({
      pmail_entity_id: entityId,
      pmail_address: pmail_add,
    });
    // user role
    result = await req.context.models.users_roles.create({
      usro_entity_id: entityId,
      usro_role_id: role_id,
    });
    res.send({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
};
// tes json format
// {
//   "username":"contohnama",
//   "password":"pass2awe",
//   "user_phone":"85832154",
//   "ponty_code":"Cell",
//   "pmail_add":"pamungkas@gmail.com",
//   "role_id":1
// }
// const SALT_ROUND = 10;

// const entity = async (req, res, next) => {
//   try {
//     const result = await req.context.models.entity.create({
//       entity_id: null,
//     });
//     req.entitas = {
//       entity_id: result.entity_id,
//     };
//     next();
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// };

// const signup = async (req, res, next) => {
//   const { username, first, last, password } = req.body;
//   const enti = req.entitas;
//   const salt = await bcrypt.genSalt(10);
//   let hashPassword = password;
//   hashPassword = await bcrypt.hash(hashPassword, salt);
//   try {
//     const result = await req.context.models.users.create({
//       user_entity_id: enti.entity_id,
//       user_name: username,
//       user_first_name: first,
//       user_last_name: last,
//       user_password: hashPassword,
//       user_modified_date: new Date(),
//     });
//     req.users = {
//       result,
//     };
//     next();
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// };

// const userRole = async (req, res) => {
//   const userAll = req.users;
//   try {
//     const result = await req.context.models.users_roles.create({
//       usro_entity_id: userAll.result.user_entity_id,
//       usro_role_id: req.body.role_id,
//       usro_modified_date: new Date(),
//     });
//     const { user_name, user_first_name, user_last_name } = req.users.result;
//     res.send({ user_name, user_first_name, user_last_name });
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// };

// use sigin with token in authJWT
// const signin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await req.context.models.users.findOne({
//       where: { user_email: email },
//     });
//     const { user_name, user_email, user_password } = result.dataValues;
//     const compare = await bcrypt.compare(password, user_password);
//     if (compare) {
//       return res.send({ user_name, user_email });
//     } else {
//       return res.sendStatus(404);
//     }
//   } catch (error) {
//     return res.sendStatus(404);
//   }
// };

const allget = async (req, res) => {
  try {
    const result = await req.context.models.users.findAll({
      include: [
        {
          model: req.context.models.roles,
          as: "usro_role_id_roles",
          required: true,
        },
      ],
    });
    res.send(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
// const allget = async (req, res) => {
//   try {
//     const users = await req.context.models.users.findAll();
//     return res.send(users);
//   } catch (error) {
//     return res.status(404).send(error);
//   }
// };

export default {
  // entity,
  signup,
  // signin,
  allget,
  // userRole,
};
