import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from "express";
import http from "http";
import webpackConfig from '../webpack.config';
import routes from "./routes";
import config from "./config";

let app = express(),
    server = http.createServer(app),
    compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('client/public'));
app.use(routes);

server.listen(config.port);