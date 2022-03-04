const fs = require('fs');
const path = require('path');

function saveData(directoryData, directoryOutputFolder, flag) { 

    if (flag === true) {

        fs.mkdir(path.join(__dirname, directoryOutputFolder), function (err) {

            if (err) {

                if (err.code === 'EEXIST') {

                    console.log(`${directoryOutputFolder} juz istnieje`);
                    
                }

            } else {

                console.log(`Stworzono ${directoryOutputFolder}`);
                
            }
        });

        

        fs.readFile(path.join(__dirname, directoryData, '2-read-write-users.json'), 'utf-8', function (err, filesData) {


            if (err) {

                console.log(err);

            } else {


                let usersData = JSON.parse(filesData);

                console.log(usersData);

                for (let userData of usersData) {


                    let id = userData.id;
                    let part = userData.name.split(" ");
                    let name = part[0];
                    let surname = part[1];

                    fs.writeFile(path.join(__dirname, directoryOutputFolder, id + '-' + name + '-' + surname + '.txt'),
                        `Name: ${name}\n` + `Surname: ${surname}\n` + `Street: ${userData.address.street}\n`
                        + `Zip Code: ${userData.address.zipcode}\n` + `City: ${userData.address.city}\n` + `Phone: ${userData.phone}`, function (err) {

                            if (err) {
                                console.log(err);
                                
                            } else {
                                console.log('Stworzono plik ' + id + '-' + name + '-' + surname + '.txt');
                                
                            }
                        })

                }


            }

        })

    } else {
       
        console.log('W  parametrze funkcji saveData() przekazano parametr "false"');

    }

}

module.exports = saveData;
