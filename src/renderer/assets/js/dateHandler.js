export default function dateHandler(dob) {
    // console.log(dob);
    return new Date(dob).toLocaleDateString('sv-SE')
    // .replaceAll('-','/');
}