exports.signnup = (req, res, next) => {
    res.status(200).json({message: 'Signup Route'});
};

exports.login = (req, res, next) => {
    res.status(200).json({message: 'Login Route'});
};
