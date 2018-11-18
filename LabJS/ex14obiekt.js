let objects = [{
    id:1,
    show: function(){
        console.log('first show');
    }
},{
    id:2
},{
    id:3,
    show: function(){
        console.log('third show');
    }
}];

function callShow(data) {
    for (let i=0; i < data.length; i++) {
        if (data[i].show) {
            data[i].show();
        }
    }
} 
callShow(objects);