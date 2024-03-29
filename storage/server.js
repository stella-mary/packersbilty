const express = require("express")
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();

var corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/quotation", (request, response) => {
    let db = new sqlite3.Database("db/packersbilty");

    // Select query
    const selectQuery =
        "SELECT quotationNumber, quotationEmail, quotationQuotation, quotationMovingType, quotationCompanyParty, quotationPartyName, quotationPhone, quotationDate, quotationPackingDate, quotationDeliveryDate, quotationCountry, quotationStates, quotationCity, quotationPinCode, quotationAddress, quotationFloor, quotationLift, quotationfCountry, quotationfStates, quotationfCity, quotationfPincode, quotationfAddress, quotationfFloor, quotationfLift, quotationfreightCharge, quotationAdvancePaid, quotationPackingCharge, quotationunPackingCharge, quotationLoadingCharge, quotationunLoadingCharge, quotationPackingMaterialCharge, quotationStorageCharge, quotationCarTPT, quotationMiscellCharge, quotationOtherCharge, quotationstCharge, quotationGreenTax, quotationSurCharge, quotationGSTQuote, quotationGST,  quotationGSTType, quotationRemark, quotationDiscount, quotationInsuranceType, quotationInsuranceCharge, quotationfGST, quotationDeclaration, quotationfInsuranceType, quotationfInsuranceCharge, quotationffGst, quotationfDeclaration, quotationLoad, quotationDown, quotationfLoad, quotationNeed, quotationPartName, quotationQuantity, quotationfValue, quotationfRemark FROM quotation";

    console.log(selectQuery);

    db.all(selectQuery, [], (err, rows) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            const quotation = rows.map((singleRow) => {
                return {
                    quotationNumber: singleRow.quotationNumber,
                    quotationEmail: singleRow.quotationEmail,
                    quotationQuotation: singleRow.quotationQuotation,
                    quotationMovingType: singleRow.quotationMovingType,
                    quotationCompanyParty: singleRow.quotationCompanyParty,
                    quotationPartyName: singleRow.quotationPartyName,
                    quotationPhone: singleRow.quotationPhone,
                    quotationDate: singleRow.quotationDate,
                    quotationPackingDate: singleRow.quotationPackingDate,
                    quotationDeliveryDate: singleRow.quotationDeliveryDate,
                    quotationCountry: singleRow.quotationCountry,
                    quotationStates: singleRow.quotationStates,
                    quotationCity: singleRow.quotationCity,
                    quotationPincode: singleRow.quotationPincode,
                    quotationAddress: singleRow.quotationAddress,
                    quotationFloor: singleRow.quotationFloor,
                    quotationLift: singleRow.quotationLift,
                    quotationfCountry: singleRow.quotationfCountry,
                    quotationfStates: singleRow.quotationfStates,
                    quotationfCity: singleRow.quotationfCity,
                    quotationfPincode: singleRow.quotationfPincode,
                    quotationfAddress: singleRow.quotationfAddress,
                    quotationfFloor: singleRow.quotationfFloor,
                    quotationfLift: singleRow.quotationfLift,
                    quotationfreightCharge: singleRow.quotationfreightCharge,
                    quotationAdvancePaid: singleRow.quotationAdvancePaid,
                    quotationPackingCharge: singleRow.quotationPackingCharge,
                    quotationunPackingCharge: singleRow.quotationunPackingCharge,
                    quotationLoadingCharge: singleRow.quotationLoadingCharge,
                    quotationunLoadingCharge: singleRow.quotationunLoadingCharge,
                    quotationPackingMaterialCharge: singleRow.quotationPackingMaterialCharge,
                    quotationStorageCharge: singleRow.quotationStorageCharge,
                    quotationCarTPT: singleRow.quotationCarTPT,
                    quotationMiscellCharge: singleRow.quotationMiscellCharge,
                    quotationOtherCharge: singleRow.quotationOtherCharge,
                    quotationstCharge: singleRow.quotationstCharge,
                    quotationGreenTax: singleRow.quotationGreenTax,
                    quotationSurCharge: singleRow.quotationSurCharge,
                    quotationGSTQuote: singleRow.quotationGSTQuote,
                    quotationGST: singleRow.quotationGST,
                    quotationGSTType: singleRow.quotationGSTType,
                    quotationRemark: singleRow.quotationRemark,
                    quotationDiscount: singleRow.quotationDiscount,
                    quotationInsuranceType: singleRow.quotationInsuranceType,
                    quotationInsuranceCharge: singleRow.quotationInsuranceCharge,
                    quotationfGST: singleRow.quotationfGST,
                    quotationDeclaration: singleRow.quotationDeclaration,
                    quotationfInsuranceType: singleRow.quotationfInsuranceType,
                    quotationfInsuranceCharge: singleRow.quotationfInsuranceCharge,
                    quotationffGst: singleRow.quotationffGst,
                    quotationfDeclaration: singleRow.quotationfDeclaration,
                    quotationLoad: singleRow.quotationLoad,
                    quotationDown: singleRow.quotationDown,
                    quotationfLoad: singleRow.quotationfLoad,
                    quotationNeed: singleRow.quotationNeed,
                    quotationPartName: singleRow.quotationPartName,
                    quotationQuantity: singleRow.quotationQuantity,
                    quotationfValue: singleRow.quotationfValue,
                    quotationfRemark: singleRow.quotationfRemark,
                };
            });

            response.json(quotation);
        }
    });

    db.close();
});


app.post("/quotation", (request, response) => {
    const newQuotation = request.body;

    console.log(newQuotation);

    let db = new sqlite3.Database("db/packersbilty");

    const insertQuery = "INSERT INTO quotation (quotationEmail, quotationQuotation, quotationMovingType, quotationCompanyParty, quotationPartyName, quotationPhone, quotationDate, quotationPackingDate, quotationDeliveryDate, quotationCountry, quotationStates, quotationCity, quotationPinCode, quotationAddress, quotationFloor, quotationLift, quotationfCountry, quotationfStates, quotationfCity, quotationfPincode, quotationfAddress, quotationfFloor, quotationfLift, quotationfreightCharge, quotationAdvancePaid, quotationPackingCharge, quotationunPackingCharge, quotationLoadingCharge, quotationunLoadingCharge, quotationPackingMaterialCharge, quotationStorageCharge, quotationCarTPT, quotationMiscellCharge, quotationOtherCharge, quotationstCharge, quotationGreenTax, quotationSurCharge, quotationGSTQuote, quotationGST,  quotationGSTType, quotationRemark, quotationDiscount, quotationInsuranceType, quotationInsuranceCharge, quotationfGST, quotationDeclaration, quotationfInsuranceType, quotationfInsuranceCharge, quotationffGst, quotationfDeclaration, quotationLoad, quotationDown, quotationfLoad, quotationNeed, quotationPartName, quotationQuantity, quotationfValue, quotationfRemark)  VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
        newQuotation.quotationNumber,
        newQuotation.quotationEmail,
        newQuotation.quotationQuotation,
        newQuotation.quotationMovingType,
        newQuotation.quotationCompanyParty,
        newQuotation.quotationPartyName,
        newQuotation.quotationPhone,
        newQuotation.quotationDate,
        newQuotation.quotationPackingDate,
        newQuotation.quotationDeliveryDate,
        newQuotation.quotationCountry,
        newQuotation.quotationStates,
        newQuotation.quotationCity,
        newQuotation.quotationPincode,
        newQuotation.quotationAddress,
        newQuotation.quotationFloor,
        newQuotation.quotationLift,
        newQuotation.quotationfCountry,
        newQuotation.quotationfStates,
        newQuotation.quotationfCity,
        newQuotation.quotationfPincode,
        newQuotation.quotationfAddress,
        newQuotation.quotationfFloor,
        newQuotation.quotationfLift,
        newQuotation.quotationfreightCharge,
        newQuotation.quotationAdvancePaid,
        newQuotation.quotationPackingCharge,
        newQuotation.quotationunPackingCharge,
        newQuotation.quotationLoadingCharge,
        newQuotation.quotationunLoadingCharge,
        newQuotation.quotationPackingMaterialCharge,
        newQuotation.quotationStorageCharge,
        newQuotation.quotationCarTPT,
        newQuotation.quotationMiscellCharge,
        newQuotation.quotationOtherCharge,
        newQuotation.quotationstCharge,
        newQuotation.quotationGreenTax,
        newQuotation.quotationSurCharge,
        newQuotation.quotationGSTQuote,
        newQuotation.quotationGST,
        newQuotation.quotationGSTType,
        newQuotation.quotationRemark,
        newQuotation.quotationDiscount,
        newQuotation.quotationInsuranceType,
        newQuotation.quotationInsuranceCharge,
        newQuotation.quotationfGST,
        newQuotation.quotationDeclaration,
        newQuotation.quotationfInsuranceType,
        newQuotation.quotationfInsuranceCharge,
        newQuotation.quotationffGst,
        newQuotation.quotationfDeclaration,
        newQuotation.quotationLoad,
        newQuotation.quotationDown,
        newQuotation.quotationfLoad,
        newQuotation.quotationNeed,
        newQuotation.quotationPartName,
        newQuotation.quotationQuantity,
        newQuotation.quotationfValue,
        newQuotation.quotationfRemark,
    ];

    db.run(insertQuery, values, (err) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            response.json({
                message: "Successfully inserted data ",
            });
        }
    });
    // db connection close
    db.close();
});


app.post("/items", (request, response) => {
    const newQuotation = request.body;

    console.log(newQuotation);

    let db = new sqlite3.Database("db/packersbilty");

    const insertQuery = "INSERT INTO items (quotationPartName, quotationQuantity, quotationfValue, quotationfRemark, itemId)  VALUES ( ?, ?, ?, ?, ?)";

    const values = [
        newQuotation.quotationPartName,
        newQuotation.quotationQuantity,
        newQuotation.quotationfValue,
        newQuotation.quotationfRemark,
        newQuotation.itemId
    ];

    db.run(insertQuery, values, (err) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            response.json({
                message: "Successfully inserted data ",
            });
        }
    });
    // db connection close
    db.close();
});

app.get("/items", (request, response) => {
    let db = new sqlite3.Database("db/packersbilty");

    // Select query
    const selectQuery =
        "SELECT id, quotationPartName, quotationQuantity, quotationfValue, quotationfRemark, itemId FROM items";

    console.log(selectQuery);

    db.all(selectQuery, [], (err, rows) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            const quotation = rows.map((singleRow) => {
                return {
                    id: singleRow.id,
                    quotationPartName: singleRow.quotationPartName,
                    quotationQuantity: singleRow.quotationQuantity,
                    quotationfValue: singleRow.quotationfValue,
                    quotationfRemark: singleRow.quotationfRemark,
                    itemId: singleRow.itemId

                };
            });

            response.json(quotation);
        }
    });

    db.close();
});

// app.delete("/items", (req, res) => {
//     const id = parseInt(req.query.id);
//     console.log(id)
//     let db = new sqlite3.Database("db/packersbilty.db");
//     const values = id

//     const deleteQuery = "DELETE FROM items WHERE id = ?";

//     db.run(deleteQuery, values, (err) => {
//         if (err) {
//             res.json({
//                 message: err.message,
//             });
//         } else {
//             res.json({
//                 message: "Successfully Deleted"
//             });
//         }
//     });
//     db.close();
// })

// app.delete("/items/:id", (request, response) => {
//     console.log("In delete items... ");
//     console.log(request.body);
//     let db = new sqlite3.Database("db/packersbilty.db");

//     db.run(
//         "delete from items where id = ?",
//         [parseInt(request.body.id)],
//         (err) => {
//             if (err) {
//                 response.json({
//                     message: err.message,
//                 });
//             } else {
//                 response.json({
//                     message: "deleted successfully",
//                 });
//             }
//         }
//     );

//     db.close();
// });

app.delete("/items/:id", (request, response) => {
    let db = new sqlite3.Database("db/packersbilty");

    const deleteQuery = "DELETE FROM items WHERE id = ?";

    db.run(deleteQuery, [parseInt(request.params.id)], (err) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            response.json({
                message: "Successfully deleted Entry ",
            });
        }
    });

    db.close();
});


app.put("/quotation", (request, response) => {
    const updatedQuotation = request.body;

    let db = new sqlite3.Database("db/packersbilty");

    const updatedStatus = updatedQuotation.attendence;
    const id = updatedQuotation.id;

    const updateQuery = "UPDATE quotation SET attendence = ? WHERE id = ?";

    const values = [updatedStatus, id];

    db.run(updateQuery, values, (err) => {
        if (err) {
            response.json({
                message: err.message,
            });
        } else {
            response.json({
                message: "Successfully updated data ",
            });
        }
    });

    db.close();
});

// app.delete("/quotation", (request, response) => {
//     console.log("In delete quotation... ");
//     console.log(request.body);
//     let db = new sqlite3.Database("db/quotation");

//     db.run(
//         "delete from quotation where id = ?",
//         [parseInt(request.body.id)],
//         (err) => {
//             if (err) {
//                 response.json({
//                     message: err.message,
//                 });
//             } else {
//                 response.json({
//                     message: "deleted successfully",
//                 });
//             }
//         }
//     );

//     db.close();
// });

app.listen(7005, () => {
    console.log("Listening Suceesfully, use 7005..")
})

