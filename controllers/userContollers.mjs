import { pool } from "../config/db.mjs";
import { EncryptData, DecryptData } from "../cryptoHelper.mjs";

const _pool = pool.promise();

export class ACTS {
    // constructor(w) {this._w = w;};

       /** Create New User Controller (FROM POST METHOD) */
    createUser(userCred, tableName) {
        let { username, email, password } = userCred;

        email = EncryptData(email);
        const iQUERY = `INSERT INTO ${tableName} VALUES (0, "${username}", "${email}", "${password}")`;

        let newUser = pool.query(iQUERY);
        return (newUser) ? true : false;
    };

       /** Get All Users Controller (FROM GET METHOD) */
    async allUsers(tableName) {
        const iQUERY = `SELECT * FROM ${tableName}`;
        let listUsers = await _pool.query(iQUERY);

        let dEmailsObj = listUsers[0].map((p) => {
            p.email = DecryptData(p.email)
            return p;
        });

        return (dEmailsObj) ? dEmailsObj : false;
    };

    /** Get Specified User Controller (FROM GET METHOD) */
    async getUser(tableName, id) {
        const iQUERY = `SELECT * FROM ${tableName} WHERE id = ${id}`;
        let listUsers = await _pool.query(iQUERY);

        listUsers[0][0].email = DecryptData(listUsers[0][0].email);
        return (listUsers) ? listUsers : false;
    };

     /** Update Existing User Controller (FROM PUT METHOD) */
    async updateUser(tableName, id, entry) {
        let entries = Object.entries(entry);
        let user;

        entries.map(async (k, i) => {
            const iQUERY = `UPDATE ${tableName} SET ${k[0]} = "${k[1]}" WHERE id = ${id}`;
            user = await _pool.query(iQUERY);
        });

        return user;
    };

     /** Delete Specified User (FROM DELETE METHOD) */
    async deleteUser(tableName, id) {
        const iQUERY = `DELETE FROM ${tableName} WHERE id = ${id}`;
        let listUsers = await _pool.query(iQUERY);

        return (listUsers) ? listUsers : false;
    }


}
