import androids from './android';
import cameras from './camera';
import laptops from './laptop';
import classOne from './classOne ';
import classTwo from './classTwo';
import classThree from './classThree';


// const fakeData = [...androids, ...cameras, ...laptops, ...classOne,...classTwo,...classThree];
const fakeData = [...classOne,...classTwo,...classThree];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;