function bai1(){
    let i =+1;
    let j =+1;
    document.getElementById('bai1').innerHTML='1, 1,&nbsp';
    let amount= +prompt('Nhap so luong ban muon in trong day Fibonacci', '');
    for (k=2; k<amount; k++ ){
        let temp= i+j;
        i=j;
        j=temp;
        document.getElementById('bai1').innerHTML+= temp + ',&nbsp';
    }
}

function bai2(){
    let num= +prompt('Vui long nhap so', '');
    let result= +1;
    for(i=1; i<=num; i++) result= result*i;
    document.getElementById('bai2').innerText= result;

}

function bai3(){
    let ang= +prompt('Nhap goc phan tu ban muon in', '');
    switch(ang){
        case 1: gocPhanTu13('&nbsp&nbsp', '*'); break;
        case 2: gocPhanTu24('&nbsp&nbsp', '*'); break;
        case 3: gocPhanTu13('*', '&nbsp&nbsp'); break;
        case 4: gocPhanTu24('*', '&nbsp&nbsp'); break;
    }
}

function gocPhanTu24(a, b){
    let doc= '';
    for(i=0; i<5; i++){
        for(j=0; j<(5-i); j++) doc+= a;
        for(j=0; j<=i; j++) doc+= b;
        doc+= '<br>';
    }
    document.getElementById('bai3').innerHTML= doc;
}

function gocPhanTu13(a, b){
    let doc= '';
    for(i=0; i<5; i++){
        for(j=0; j<=i; j++) doc+= b;
        for(j=0; j<(5-i); j++) doc+= a;
        doc+= '<br>';
    }
    document.getElementById('bai3').innerHTML= doc;
}

function bai4(){
    let doc='';
    doc= inChieuDai(doc);
    doc= inChieuRong(doc,  +5);
    doc= inChieuDai(doc);
    document.getElementById('bai4'). innerHTML= doc;
}

function inChieuDai(temp){
    for(i=0; i<8; i++){
        temp+= '*';
        for(j=0; j<3; j++) temp+= '&nbsp';
    }
    temp+= '<br>';
    return temp;
}

function inChieuRong(temp, lines){
    for(i=0; i<lines; i++){
        temp+='*';
        for(j=0; j<33; j++) temp+='&nbsp';
        temp+='*';
        temp+='<br>';
    }
    return temp;
}

function bai6(){
    let heart= '';
    for(i=0; i<3; i++){
        for(j=(4-3*i); j>0; j--) heart+= '&nbsp';
        for(j=0; j< (5+3*i); j++) heart+='*';
        for(j=(10-6*i); j>0; j--) heart+= '&nbsp';
        for(j=0; j< (5+3*i); j++) heart+='*';
        if(i==2) heart= heart.substr(0, 148);
        heart+= '<br>';
    }
    for (i=0; i<3; i++){
        for(j=0; j<(2*i); j++) heart+='&nbsp';
        for(j=0; j<=(18-2*i); j++) heart+='*';
        heart+= '<br>';
    }
    for (i=0; i<3; i++){
        for(j=0; j<(9+4*i); j++) heart+='&nbsp';
        for(j=0; j<=(9-4*i); j++) heart+='*';
        heart+= '<br>';
    }
    document.getElementById('bai6').innerHTML= heart;
}

