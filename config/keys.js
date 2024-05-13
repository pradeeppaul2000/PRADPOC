if ( process.env.NODE_ENV==='Production'){

    module.exports= require('./dev');
}else{

module.exports= require('./prod')
}