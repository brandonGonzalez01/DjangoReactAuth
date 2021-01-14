const webpack = require('webpack');

module.exports = (env,argv) => {
    const noAuth = (env && env.noAuth) ? true : false;
    
    //insert global scoped variables in constants
    const globalVariables = {
        __NoAuth__: JSON.stringify(noAuth)
    }

    const config = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins:[
            new webpack.DefinePlugin(globalVariables),
        ],
    };

    return config;
};