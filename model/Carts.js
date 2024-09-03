import {connection as db} from '../config/index.js'

class Carts{
    fetchCarts(req, res) {
        try{
            const strQry = `
            SELECT distinct c.userID, CONCAT(u.firstName, ' ', u.lastName) AS fullName,
                group_concat(DISTINCT p.prodName) 'Product',
                sum(p.amount * c.quantity)  'Total Price',
                sum(c.quantity) 'Quantity'
            FROM Carts c
            JOIN Users u ON c.userID = u.userID
            JOIN Products p ON c.prodID = p.prodID
            group by c.userID;

            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all carts')
                res.json({
                    status: res.statusCode,
                    results: results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }

    }

    fetchuserCart(req, res) {
        try{
            const strQry = `
            
            SELECT distinct c.userID, CONCAT(u.firstName, ' ', u.lastName) AS fullName,
                group_concat(DISTINCT p.prodName) 'Product',
                sum(p.amount) 'Total Price',
                sum(c.quantity) 'Quantity'
            FROM Carts c
            JOIN Users u ON c.userID = u.userID
            JOIN Products p ON c.prodID = p.prodID
            WHERE c.userID = ${req.params.id}
            group by c.userID;

            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
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
            INSERT INTO Carts
            (userID, prodID, quantity)
            VALUES (${req.params.id}, ${req.body.prodID}, ${req.body.quantity});
            `
            console.log(req.params.id, req.body.prodID, req.body.quantity);
            
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    msg : 'added to cart '
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
            UPDATE Carts 
            SET quantity = ${req.body.quantity}
            WHERE prodID = ${req.params.prodID} AND userID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to update cart')
                res.json({
                    status: res.statusCode,
                    msg: 'The quantity has been updated. Aragato😁'
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

}

export { 
    Carts 
}
