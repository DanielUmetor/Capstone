import {connection as db} from '../config/index.js'

class Carts{
    fetchCarts(req, res) {
        try{
            const strQry = `
            SELECT * FROM Carts;

            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all carts')
                res.json({
                    status: res.statusCode,
                    results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }

    }

    fetchuserCarts(req, res) {
        try{
            const strQry = `
            SELECT * FROM Cart WHERE userID = ?;

            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all carts')
                res.json({
                    status: res.statusCode,
                    results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }

    }


    fetchaddUserCart(req, res)  {
        try{
            const strQry = `
            INSERT INTO Cart (userID, prodID, quantity) 
            VALUES (?, ?, ?) 
            ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity);
    
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add to cart')
                res.json({
            status: res.statusCode,
            result: result[0]
        })
            })
        }  catch (e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    fetchupdateUserCart(req, res) {
        try{
            const strQry = `
            UPDATE Cart 
            SET quantity = ? 
            WHERE cartID = ? AND userID = ?;
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to update cart')
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    fetchdeleteItemsCart(req, res) { 
        try{
            const strQry = `
            DELETE FROM Cart WHERE userID = ?;
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete cart')
                res.json({
            status: res.statusCode,
            msg: 'A cart was removed'
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    fetchDeleteSpecificItemsinCart(req, res) {
        try{

            const strQry = `
            DELETE FROM Cart 
            WHERE cartID = ? AND userID = ?;
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete a item cart')
                res.json({
                     status: res.statusCode,
                     msg: 'A item in cart was removed'
            })
            })
}     catch (e) {
    res.json({
        status: 404,
        err: e.message
    })
}
    }
}

export { 
    Carts 
}
