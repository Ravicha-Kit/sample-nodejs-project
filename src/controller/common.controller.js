const CommonService = require('../service/common.service');

exports.CommonController = class CommonController {
    static welcome(req, res) {
        const msg = CommonService.getWelcomeMessage(req.query.name);
        res.status(200).json({
            message: msg
        });
    }

    static sum(req, res) {
        const result = CommonService.SumNumber(req.body.num1, req.body.num2);
        res.status(200).json({ result });
    }
}


