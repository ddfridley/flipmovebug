const path = require("path");
const webpack=require("webpack");

const use= [
    {   loader: "babel-loader",
    }
]


module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, "src"),
    entry: {
        demo:    "./demo.jsx",
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "dist/demo"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: /(.*profile.*)/, // for some reason, webpack (4.25.1) will exclude files with names containing 'profile' (or 'profile-' not sure) so I has to explicitly include them
                use,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use,
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use,
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx'],
    },
};