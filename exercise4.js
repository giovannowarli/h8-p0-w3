var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (data) {
    input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)
    var date =input[3].split('/')
    switch (date[1]) {
      case '01':
        date[1] = 'Januari';
        break;
      case '02':
        date[1] = 'Februari';
        break;
      case '03':
        date[1] = 'Maret';
        break;
      case '04':
        date[1] = 'April';
        break;
      case '05':
        date[1] = 'Mei';
        break;
      case '06':
        date[1] = 'Juni';
        break;
      case '07':
        date[1] = 'Juli';
        break;
      case '08':
        date[1] = 'Agustus';
        break;
      case '09':
        date[1] = 'September';
        break;
      case '10':
        date[1] = 'Oktober';
        break;
      case '11':
        date[1] = 'November';
        break;
      case '12':
        date[1] = 'Desember';
        break;
    }
    console.log(date[01]);
    console.log(date.sort());
    console.log(date.join('-'));
    console.log(input[1].slice(0,14));
}
    

console.log(dataHandling2(input));