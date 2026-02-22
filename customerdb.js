const sql = require("mssql");
const express = require("express");
const config = require('./dbconfig');

async function connectandQuery(req, res) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from Customers');
        console.log(result.recordset);  
        return result.recordset;

    } catch (error) {
        console.log('Error: ',JSON.stringify(error, null,2));
    }finally {
        await sql.close();
    }
}

module.exports = { connectandQuery };