"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'The API is active' });
    }
}
exports.indexController = new IndexController();
