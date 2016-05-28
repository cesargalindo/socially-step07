import {Mongo} from 'meteor/mongo';

// export let Parties = new Mongo.Collection('parties');
export let Parties = new Mongo.Collection<Party>('parties');