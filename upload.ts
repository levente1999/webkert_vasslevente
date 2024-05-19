const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Valós adatok
const jaratok = [
  { id: '32', nev: 'Szegedi 32-es busz', jarmu_id: 'busz32', indulas_id: 'marsTer', erkezes_id: 'verto' },
  { id: '2', nev: 'Szegedi 2-es villamos', jarmu_id: 'villamos2', indulas_id: 'kortoltesUtca', erkezes_id: 'europaLiget' },
];

const jaratmegallok = [
  { id: '1', jarat_id: '32', megallo_id: 'marsTer', sorszam: 1, ido_perc: 0 },
  { id: '2', jarat_id: '32', megallo_id: 'aradiVertanukTere', sorszam: 2, ido_perc: 5 },
  { id: '3', jarat_id: '32', megallo_id: 'szentIstvanTer', sorszam: 3, ido_perc: 10 },
  { id: '4', jarat_id: '32', megallo_id: 'verto', sorszam: 4, ido_perc: 15 },
  { id: '5', jarat_id: '2', megallo_id: 'kortoltesUtca', sorszam: 1, ido_perc: 0 },
  { id: '6', jarat_id: '2', megallo_id: 'dugonicsTer', sorszam: 2, ido_perc: 3 },
  { id: '7', jarat_id: '2', megallo_id: 'szechenyiTer', sorszam: 3, ido_perc: 5 },
  { id: '8', jarat_id: '2', megallo_id: 'europaLiget', sorszam: 4, ido_perc: 8 },
];

const jarmuvek = [
  { id: 'busz32', nev: '32-es busz' },
  { id: 'villamos2', nev: '2-es villamos' },
];

const megallohelyek = [
  { id: 'marsTer', nev: 'Mars tér' },
  { id: 'aradiVertanukTere', nev: 'Aradi vértanúk tere' },
  { id: 'szentIstvanTer', nev: 'Szent István tér' },
  { id: 'verto', nev: 'Vértó' },
  { id: 'kortoltesUtca', nev: 'Körtöltés utca' },
  { id: 'dugonicsTer', nev: 'Dugonics tér' },
  { id: 'szechenyiTer', nev: 'Széchenyi tér' },
  { id: 'europaLiget', nev: 'Európa Liget' },
];

const menetrendek = [
  { id: '1', jarat_id: '32', indulas_ido: { hours: 8, minutes: 0 }, indulas_megallo_id: 'marsTer', erkezes_ido: { hours: 8, minutes: 15 }, erkezes_megallo_id: 'verto' },
  { id: '2', jarat_id: '2', indulas_ido: { hours: 9, minutes: 0 }, indulas_megallo_id: 'kortoltesUtca', erkezes_ido: { hours: 9, minutes: 8 }, erkezes_megallo_id: 'europaLiget' },
];

// Adatok feltöltése
async function uploadData(collectionName, data) {
  const batch = db.batch();

  data.forEach((item) => {
    const docRef = db.collection(collectionName).doc(item.id);
    batch.set(docRef, item);
  });

  try {
    await batch.commit();
    console.log(`${collectionName} adatok sikeresen feltöltve.`);
  } catch (error) {
    console.error(`Hiba történt a ${collectionName} adatok feltöltése során:`, error);
  }
}

// Fő függvény a feltöltési folyamat indításához
async function main() {
  await uploadData('jaratok', jaratok);
  await uploadData('jaratmegallok', jaratmegallok);
  await uploadData('jarmuvek', jarmuvek);
  await uploadData('megallohelyek', megallohelyek);
  await uploadData('menetrendek', menetrendek);
}

main();