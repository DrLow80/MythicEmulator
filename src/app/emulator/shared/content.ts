import { Guid } from 'guid-typescript';

export type FateResult = 'Exceptional No' | 'No' | 'Yes' | 'Exceptional Yes';

export const FateResults: FateResult[] = [
  'Exceptional No',
  'No',
  'Yes',
  'Exceptional Yes',
];

export type FateOdd =
  | 'Impossible'
  | 'No Way'
  | 'Very Unlikely'
  | 'Unlikely'
  | '50 50'
  | 'Somewhat Likley'
  | 'Likely'
  | 'Very Likely'
  | 'Near Sure Thing'
  | 'A Sure Thing'
  | 'Has To Be';

export type FateAction =
  | 'Attainment'
  | 'Starting'
  | 'Neglect'
  | 'Fight'
  | 'Recruit'
  | 'Triumph'
  | 'Violate'
  | 'Oppose'
  | 'Malice'
  | 'Communicate'
  | 'Persecute'
  | 'Increase'
  | 'Decrease'
  | 'Abandon'
  | 'Gratify'
  | 'Inquire'
  | 'Antagonise'
  | 'Move'
  | 'Waste'
  | 'Truce'
  | 'Release'
  | 'Befriend'
  | 'Judge'
  | 'Desert'
  | 'Dominate'
  | 'Procrastinate'
  | 'Praise'
  | 'Separate'
  | 'Take'
  | 'Break'
  | 'Heal'
  | 'Delay'
  | 'Stop'
  | 'Lie'
  | 'Return'
  | 'Immitate'
  | 'Struggle'
  | 'Inform'
  | 'Bestow'
  | 'Postpone'
  | 'Expose'
  | 'Haggle'
  | 'Imprison'
  | 'Release'
  | 'Celebrate'
  | 'Develop'
  | 'Travel'
  | 'Block'
  | 'Harm'
  | 'Debase'
  | 'Overindulge'
  | 'Adjourn'
  | 'Adversity'
  | 'Kill'
  | 'Disrupt'
  | 'Usurp'
  | 'Create'
  | 'Betray'
  | 'Agree'
  | 'Abuse'
  | 'Oppress'
  | 'Inspect'
  | 'Ambush'
  | 'Spy'
  | 'Attach'
  | 'Carry'
  | 'Open'
  | 'Carelessness'
  | 'Ruin'
  | 'Extravagance'
  | 'Trick'
  | 'Arrive'
  | 'Propose'
  | 'Divide'
  | 'Refuse'
  | 'Mistrust'
  | 'Deceive'
  | 'Cruelty'
  | 'Intolerance'
  | 'Trust'
  | 'Excitement'
  | 'Activity'
  | 'Assist'
  | 'Care'
  | 'Negligence'
  | 'Passion'
  | 'Work hard'
  | 'Control'
  | 'Attract'
  | 'Failure'
  | 'Pursue'
  | 'Vengeance'
  | 'Proceedings'
  | 'Dispute'
  | 'Punish'
  | 'Guide'
  | 'Transform'
  | 'Overthrow'
  | 'Oppress'
  | 'Change';

export const FateActions: FateAction[] = [
  'Attainment',
  'Starting',
  'Neglect',
  'Fight',
  'Recruit',
  'Triumph',
  'Violate',
  'Oppose',
  'Malice',
  'Communicate',
  'Persecute',
  'Increase',
  'Decrease',
  'Abandon',
  'Gratify',
  'Inquire',
  'Antagonise',
  'Move',
  'Waste',
  'Truce',
  'Release',
  'Befriend',
  'Judge',
  'Desert',
  'Dominate',
  'Procrastinate',
  'Praise',
  'Separate',
  'Take',
  'Break',
  'Heal',
  'Delay',
  'Stop',
  'Lie',
  'Return',
  'Immitate',
  'Struggle',
  'Inform',
  'Bestow',
  'Postpone',
  'Expose',
  'Haggle',
  'Imprison',
  'Release',
  'Celebrate',
  'Develop',
  'Travel',
  'Block',
  'Harm',
  'Debase',
  'Overindulge',
  'Adjourn',
  'Adversity',
  'Kill',
  'Disrupt',
  'Usurp',
  'Create',
  'Betray',
  'Agree',
  'Abuse',
  'Oppress',
  'Inspect',
  'Ambush',
  'Spy',
  'Attach',
  'Carry',
  'Open',
  'Carelessness',
  'Ruin',
  'Extravagance',
  'Trick',
  'Arrive',
  'Propose',
  'Divide',
  'Refuse',
  'Mistrust',
  'Deceive',
  'Cruelty',
  'Intolerance',
  'Trust',
  'Excitement',
  'Activity',
  'Assist',
  'Care',
  'Negligence',
  'Passion',
  'Work hard',
  'Control',
  'Attract',
  'Failure',
  'Pursue',
  'Vengeance',
  'Proceedings',
  'Dispute',
  'Punish',
  'Guide',
  'Transform',
  'Overthrow',
  'Oppress',
  'Change',
];

export type FateSubject =
  | 'Goals'
  | 'Dreams'
  | 'Environment'
  | 'Outside'
  | 'Inside'
  | 'Reality'
  | 'Allies'
  | 'Enemies'
  | 'Evil'
  | 'Good'
  | 'Emotions'
  | 'Opposition'
  | 'War'
  | 'Peace'
  | 'The innocent'
  | 'Love'
  | 'The spiritual'
  | 'The intellectual'
  | 'New ideas'
  | 'Joy'
  | 'Messages'
  | 'Energy'
  | 'Balance'
  | 'Tension'
  | 'Friendship'
  | 'The physical'
  | 'A project'
  | 'Pleasures'
  | 'Pain'
  | 'Possessions'
  | 'Benefits'
  | 'Plans'
  | 'Lies'
  | 'Expectations'
  | 'Legal matters'
  | 'Bureaucracy'
  | 'Business'
  | 'A path'
  | 'News'
  | 'Exterior factors'
  | 'Advice'
  | 'A plot'
  | 'Competition'
  | 'Prison'
  | 'Illness'
  | 'Food'
  | 'Attention'
  | 'Success'
  | 'Failure'
  | 'Travel'
  | 'Jealousy'
  | 'Dispute'
  | 'Home'
  | 'Investment'
  | 'Suffering'
  | 'Wishes'
  | 'Tactics'
  | 'Stalemate'
  | 'Randomness'
  | 'Misfortune'
  | 'Death'
  | 'Disruption'
  | 'Power'
  | 'A burden'
  | 'Intrigues'
  | 'Fears'
  | 'Ambush'
  | 'Rumor'
  | 'Wounds'
  | 'Extravagance'
  | 'A representative'
  | 'Adversities'
  | 'Opulence'
  | 'Liberty'
  | 'Military'
  | 'The mundane'
  | 'Trials'
  | 'Masses'
  | 'Vehicle'
  | 'Art'
  | 'Victory'
  | 'Dispute'
  | 'Riches'
  | 'Status quo'
  | 'Technology'
  | 'Hope'
  | 'Magic'
  | 'Illusions'
  | 'Portals'
  | 'Danger'
  | 'Weapons'
  | 'Animals'
  | 'Weather'
  | 'Elements'
  | 'Nature'
  | 'The public'
  | 'Leadership'
  | 'Fame'
  | 'Anger'
  | 'Information';

export const FateSubjects: FateSubject[] = [
  'Goals',
  'Dreams',
  'Environment',
  'Outside',
  'Inside',
  'Reality',
  'Allies',
  'Enemies',
  'Evil',
  'Good',
  'Emotions',
  'Opposition',
  'War',
  'Peace',
  'The innocent',
  'Love',
  'The spiritual',
  'The intellectual',
  'New ideas',
  'Joy',
  'Messages',
  'Energy',
  'Balance',
  'Tension',
  'Friendship',
  'The physical',
  'A project',
  'Pleasures',
  'Pain',
  'Possessions',
  'Benefits',
  'Plans',
  'Lies',
  'Expectations',
  'Legal matters',
  'Bureaucracy',
  'Business',
  'A path',
  'News',
  'Exterior factors',
  'Advice',
  'A plot',
  'Competition',
  'Prison',
  'Illness',
  'Food',
  'Attention',
  'Success',
  'Failure',
  'Travel',
  'Jealousy',
  'Dispute',
  'Home',
  'Investment',
  'Suffering',
  'Wishes',
  'Tactics',
  'Stalemate',
  'Randomness',
  'Misfortune',
  'Death',
  'Disruption',
  'Power',
  'A burden',
  'Intrigues',
  'Fears',
  'Ambush',
  'Rumor',
  'Wounds',
  'Extravagance',
  'A representative',
  'Adversities',
  'Opulence',
  'Liberty',
  'Military',
  'The mundane',
  'Trials',
  'Masses',
  'Vehicle',
  'Art',
  'Victory',
  'Dispute',
  'Riches',
  'Status quo',
  'Technology',
  'Hope',
  'Magic',
  'Illusions',
  'Portals',
  'Danger',
  'Weapons',
  'Animals',
  'Weather',
  'Elements',
  'Nature',
  'The public',
  'Leadership',
  'Fame',
  'Anger',
  'Information',
];

export type Focus =
  | 'Remote event'
  | 'NPC action'
  | 'Introduce a new NPC'
  | 'Move toward a thread'
  | 'Move away from a thread'
  | 'Close a thread'
  | 'PC negative'
  | 'PC positive'
  | 'Ambiguous event'
  | 'NPC negative'
  | 'NPC positive';

export const Focuses: Focus[] = [
  'Remote event',
  'NPC action',
  'Introduce a new NPC',
  'Move toward a thread',
  'Move away from a thread',
  'Close a thread',
  'PC negative',
  'PC positive',
  'Ambiguous event',
  'NPC negative',
  'NPC positive',
];

export type SceneStatus = 'Normal' | 'Altered' | 'Interupt';

export const SceneStatuses: SceneStatus[] = ['Altered', 'Interupt', 'Normal'];

export interface IProbability {
  exceptionalYes: number;
  no: number;
  yes: number;
}

export interface IOddProbability {
  probabilities: Record<number, IProbability>;
}

export const FateTable: Record<FateOdd, Record<number, IProbability>> = {
  Impossible: {
    9: { exceptionalYes: 10, yes: 50, no: 91 },
    8: { exceptionalYes: 5, yes: 25, no: 86 },
    7: { exceptionalYes: 3, yes: 15, no: 84 },
    6: { exceptionalYes: 2, yes: 10, no: 83 },
    5: { exceptionalYes: 1, yes: 5, no: 82 },
    4: { exceptionalYes: 1, yes: 5, no: 82 },
    3: { exceptionalYes: 0, yes: 0, no: 81 },
    2: { exceptionalYes: 0, yes: 0, no: 81 },
    1: { exceptionalYes: 0, yes: 0, no: 77 },
  },
  'No Way': {
    9: { exceptionalYes: 15, yes: 75, no: 96 },
    8: { exceptionalYes: 10, yes: 50, no: 91 },
    7: { exceptionalYes: 7, yes: 35, no: 88 },
    6: { exceptionalYes: 5, yes: 25, no: 86 },
    5: { exceptionalYes: 3, yes: 15, no: 84 },
    4: { exceptionalYes: 2, yes: 10, no: 83 },
    3: { exceptionalYes: 1, yes: 5, no: 82 },
    2: { exceptionalYes: 1, yes: 5, no: 82 },
    1: { exceptionalYes: 0, yes: 0, no: 81 },
  },
  'Very Unlikely': {
    9: { exceptionalYes: 16, yes: 85, no: 97 },
    8: { exceptionalYes: 13, yes: 65, no: 94 },
    7: { exceptionalYes: 10, yes: 50, no: 91 },
    6: { exceptionalYes: 9, yes: 45, no: 90 },
    5: { exceptionalYes: 5, yes: 25, no: 86 },
    4: { exceptionalYes: 3, yes: 15, no: 84 },
    3: { exceptionalYes: 2, yes: 10, no: 83 },
    2: { exceptionalYes: 1, yes: 5, no: 82 },
    1: { exceptionalYes: 1, yes: 5, no: 82 },
  },
  Unlikely: {
    9: { exceptionalYes: 18, yes: 90, no: 99 },
    8: { exceptionalYes: 15, yes: 75, no: 96 },
    7: { exceptionalYes: 11, yes: 55, no: 92 },
    6: { exceptionalYes: 10, yes: 50, no: 91 },
    5: { exceptionalYes: 7, yes: 35, no: 88 },
    4: { exceptionalYes: 4, yes: 20, no: 85 },
    3: { exceptionalYes: 3, yes: 84, no: 15 },
    2: { exceptionalYes: 2, yes: 10, no: 83 },
    1: { exceptionalYes: 1, yes: 5, no: 82 },
  },
  '50 50': {
    9: { exceptionalYes: 19, yes: 95, no: 100 },
    8: { exceptionalYes: 16, yes: 85, no: 97 },
    7: { exceptionalYes: 15, yes: 75, no: 96 },
    6: { exceptionalYes: 13, yes: 65, no: 94 },
    5: { exceptionalYes: 10, yes: 50, no: 91 },
    4: { exceptionalYes: 7, yes: 35, no: 88 },
    3: { exceptionalYes: 5, yes: 25, no: 86 },
    2: { exceptionalYes: 3, yes: 15, no: 84 },
    1: { exceptionalYes: 2, yes: 10, no: 83 },
  },
  'Somewhat Likley': {
    9: { exceptionalYes: 19, yes: 95, no: 100 },
    8: { exceptionalYes: 18, yes: 90, no: 99 },
    7: { exceptionalYes: 16, yes: 85, no: 97 },
    6: { exceptionalYes: 16, yes: 80, no: 97 },
    5: { exceptionalYes: 13, yes: 65, no: 94 },
    4: { exceptionalYes: 10, yes: 50, no: 91 },
    3: { exceptionalYes: 9, yes: 45, no: 90 },
    2: { exceptionalYes: 5, yes: 25, no: 86 },
    1: { exceptionalYes: 4, yes: 20, no: 85 },
  },
  Likely: {
    9: { exceptionalYes: 20, yes: 100, no: 0 },
    8: { exceptionalYes: 19, yes: 95, no: 100 },
    7: { exceptionalYes: 18, yes: 90, no: 99 },
    6: { exceptionalYes: 16, yes: 85, no: 97 },
    5: { exceptionalYes: 15, yes: 75, no: 96 },
    4: { exceptionalYes: 11, yes: 55, no: 92 },
    3: { exceptionalYes: 10, yes: 50, no: 91 },
    2: { exceptionalYes: 7, yes: 35, no: 88 },
    1: { exceptionalYes: 5, yes: 25, no: 86 },
  },
  'Very Likely': {
    9: { exceptionalYes: 21, yes: 105, no: 0 },
    8: { exceptionalYes: 19, yes: 95, no: 100 },
    7: { exceptionalYes: 19, yes: 95, no: 100 },
    6: { exceptionalYes: 18, yes: 90, no: 99 },
    5: { exceptionalYes: 16, yes: 85, no: 97 },
    4: { exceptionalYes: 15, yes: 75, no: 96 },
    3: { exceptionalYes: 13, yes: 65, no: 94 },
    2: { exceptionalYes: 10, yes: 50, no: 91 },
    1: { exceptionalYes: 9, yes: 45, no: 90 },
  },
  'Near Sure Thing': {
    9: { exceptionalYes: 23, yes: 115, no: 0 },
    8: { exceptionalYes: 20, yes: 100, no: 0 },
    7: { exceptionalYes: 19, yes: 95, no: 100 },
    6: { exceptionalYes: 19, yes: 95, no: 100 },
    5: { exceptionalYes: 18, yes: 90, no: 99 },
    4: { exceptionalYes: 16, yes: 80, no: 97 },
    3: { exceptionalYes: 15, yes: 75, no: 96 },
    2: { exceptionalYes: 11, yes: 55, no: 92 },
    1: { exceptionalYes: 10, yes: 50, no: 91 },
  },
  'A Sure Thing': {
    9: { exceptionalYes: 25, yes: 125, no: 0 },
    8: { exceptionalYes: 22, yes: 110, no: 0 },
    7: { exceptionalYes: 19, yes: 95, no: 100 },
    6: { exceptionalYes: 19, yes: 95, no: 100 },
    5: { exceptionalYes: 18, yes: 90, no: 99 },
    4: { exceptionalYes: 16, yes: 85, no: 97 },
    3: { exceptionalYes: 16, yes: 80, no: 97 },
    2: { exceptionalYes: 13, yes: 65, no: 94 },
    1: { exceptionalYes: 11, yes: 55, no: 92 },
  },
  'Has To Be': {
    9: { exceptionalYes: 26, yes: 145, no: 0 },
    8: { exceptionalYes: 26, yes: 130, no: 0 },
    7: { exceptionalYes: 20, yes: 100, no: 0 },
    6: { exceptionalYes: 20, yes: 100, no: 0 },
    5: { exceptionalYes: 19, yes: 95, no: 100 },
    4: { exceptionalYes: 19, yes: 95, no: 100 },
    3: { exceptionalYes: 18, yes: 90, no: 99 },
    2: { exceptionalYes: 16, yes: 85, no: 97 },
    1: { exceptionalYes: 16, yes: 80, no: 97 },
  },
};

export type ItemType = 'PC' | 'NPC' | 'Thread';

export const ItemTypes: ItemType[] = ['NPC', 'Thread', 'PC'];

export interface IItem {
  description: string;
  enabled: boolean;
  id: string;
  name: string;
  type: ItemType;
}

export interface IQuestion {
  content: string;
  description: string;
  fateResult: FateResult;
}

export interface IScene {
  action: FateAction;
  completed: boolean;
  description: string;
  focus: Focus;
  id: string;
  items: IItem[];
  questions: IQuestion[];
  status: SceneStatus;
  subject: FateSubject;
  title: string;
}

export interface ISession {
  chaos: number;
  id: string;
  items: IItem[];
  scenes: IScene[];
  title: string;
}

export function oneRandomThing<T>(values: T[]): T {
  if (values.length < 1) {
    return null;
  }

  if (values.length < 2) {
    return values[0];
  }

  const index = randomNumber(values.length, false);

  const result = values[index];

  return result;
}

export function randomGetFocusItem(value: Focus, items: IItem[]): IItem {
  switch (value) {
    case 'Ambiguous event':
    case 'Remote event': {
      //do nothing
      return oneRandomThing(items);
    }
    case 'Close a thread': {
      const thread = randomItem(items, 'Thread');

      thread.enabled = false;

      return thread;
    }
    case 'Move away from a thread':
    case 'Move toward a thread': {
      return randomItem(items, 'Thread');
    }
    case 'Introduce a new NPC': {
      return createItem('NPC');
    }
    case 'NPC action':
    case 'NPC negative':
    case 'NPC positive': {
      return randomItem(items, 'NPC');
    }
    case 'PC negative':
    case 'PC positive': {
      return randomItem(items, 'PC');
    }

    default: {
      throw new Error(`value not supported: ${value}`);
    }
  }
}

export function randomItem(items: IItem[], itemType: ItemType): IItem {
  if (!items) {
    return createItem(itemType);
  }

  const values = items.filter((x) => x.type === itemType && x.enabled);

  if (!values.length) {
    return createItem(itemType);
  }

  const result = oneRandomThing(values);

  return result;
}

export function createItem(itemType: ItemType): IItem {
  return {
    description: '',
    enabled: true,
    id: Guid.create().toString(),
    name: `New ${itemType}`,
    type: itemType,
  };
}

export function getAllItems(session: ISession): IItem[] {
  let items = session.items;

  session.scenes.forEach((scene) => {
    items = items.concat(scene.items);
  });

  const results = items.filter(
    (thing, i, arr) => arr.findIndex((t) => t.id === thing.id) === i
  );

  return results;
}

export function createRandomScene(status: SceneStatus, items: IItem[]): IScene {
  const randomAction = oneRandomThing(FateActions);

  const randomSubject = oneRandomThing(FateSubjects);

  const randomFocus = oneRandomThing(Focuses);

  const result: IScene = {
    title: 'New Scene',
    description: '',
    action: randomAction,
    id: Guid.create().toString(),
    items: [],
    questions: [],
    status: status,
    subject: randomSubject,
    focus: randomFocus,
    completed: false,
  };

  if (status === 'Interupt') {
    result.title = '*' + result.title;
  }

  const randomItem = randomGetFocusItem(randomFocus, items);

  if (randomItem) {
    result.items.push(randomItem);
  }

  return result;
}

export function randomNumber(max: number, startAtOne: boolean): number {
  let value = Math.floor(Math.random() * max);

  if (startAtOne) {
    value += 1;
  }

  return value;
}

export function adjustChaos(chaos: number, amount: number): number {
  chaos += amount;

  if (chaos > 9) {
    chaos = 9;
  }

  if (chaos < 1) {
    chaos = 1;
  }

  return chaos;
}

export function generateRandomScene(items: IItem[], session: ISession): IScene {
  const status = randomSceneStatus(session.chaos);

  const scene = createRandomScene(status, items);

  scene.title = 'Scene ' + (session.scenes.length + 1);

  session.scenes.push(scene);

  if (status === 'Interupt') {
    const interruptScene = createRandomScene('Normal', items);

    interruptScene.title = '*Scene ' + (session.scenes.length + 1);

    session.scenes.push(interruptScene);
  }

  return scene;
}

export function randomSceneStatus(chaos: number): SceneStatus {
  const value = randomNumber(10, true);

  if (value > chaos) {
    return 'Normal';
  } else if (value % 2 === 0) {
    return 'Interupt';
  } else {
    return 'Altered';
  }
}
