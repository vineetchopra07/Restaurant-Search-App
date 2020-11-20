import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer NnyDpUWTVO-D0DMzcjhv4ctNHchVe5ZfXgXyqdaTeVmrTuEsijDFjb3JDd7i7EzAqG7TyIPU_1x1_8W8XgnbrbUmR69CcrHzT_QaUazUFW8sv5kP3g34xjOy_0HOXnYx'
    }

});