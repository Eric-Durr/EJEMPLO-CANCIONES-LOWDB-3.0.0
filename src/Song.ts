import {Band, BandInterface} from './Band';

export interface SongInterface {
  name: string,
  duration: number,
  band: BandInterface
}

export class Song {
  constructor(private name: string, private duration: number,
    private band: Band) {
  }

  public getName(): string {
    return this.name;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getBand(): Band {
    return this.band;
  }

  public static deserialize(songs: SongInterface[]): Song[] {
    const mySongs: Song[] = [];

    songs.forEach((song) => {
      const mySong = new Song(song.name, song.duration, new Band(song.band.name, song.band.members));
      mySongs.push(mySong);
    });

    return mySongs;
  }
}
