// module.exports= {
//     rules:[
//         {
//             test: /\.m?js$/ ,
//             exclude: /node_modules/,
//             use:{
//                 loader: 'babel-loader',
//                 option:{
//                     presets:['@babel/preset-react','@babel/preset-env'],
//                     Plugins :['@babel/plugin-transform-runtime'],
//                 },
//             },

//         },
//     ],
// };

module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
  