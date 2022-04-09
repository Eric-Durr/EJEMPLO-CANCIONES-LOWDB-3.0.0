import {Low, JSONFile as FileSync } from 'lowdb';

import {Song, SongInterface} from "./Song";
import {SchemaInterface} from './writeToDataBase';

const adapter = new FileSync<SchemaInterface>('songs.json');
const db = new Low(adapter);

async function readDB() {
  await db.read();
  const serialized: Song[] = db.data.songs;
  const mySongs = Song.deserialize(serialized);
  mySongs.forEach((song) => {
    console.log(song.getName());
  });
}

readDB();