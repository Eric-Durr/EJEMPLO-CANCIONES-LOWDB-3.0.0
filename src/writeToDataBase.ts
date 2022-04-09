import {Low, JSONFile as FileSync } from 'lowdb';
import {Band} from './Band';
import {Song, SongInterface} from './Song';

export interface SchemaInterface {
  songs: Song[]
}

const myBand = new Band('Artic Monkeys', 4);
const mySong = new Song('Do I Wanna Know?', 272, myBand);
const mySecondSong = new Song('Four out of five', 330, myBand);

// const db: lowdb.LowdbSync<SchemaInterface> = lowdb(new FileSync("../songs.json"));

const adapter = new FileSync<SchemaInterface>('songs.json')
const db = new Low(adapter)

db.read().then(()=> {
  db.data ||= { songs: [] }  
  db.data.songs.push(mySong)
  db.data.songs.push(mySecondSong)
  // db.data.songs.push(myBand) <-- TS gives error bc of type
  db.write()
})

