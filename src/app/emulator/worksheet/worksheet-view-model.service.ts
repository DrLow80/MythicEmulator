import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorksheetModel } from './WorksheetModel';
import { oneRandomThing } from '../shared/content';
import {
  IActionDefinition,
  IFocus,
  IWorksheetItem,
  IWorksheetScene,
} from './interfaces';

export const WorksheetFocuses: IFocus[] = [
  {
    name: 'Remote event',
    definition:
      'Something important has happened that bears on the adventure, but the player characters were not present when the event occurred. This can result in many ways, from a non-player character telling them some piece of news, to coming across evidence of this other event. A remote event can either by implied or directly stated.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.items);
    },
  },
  {
    name: 'NPC action',
    definition:
      'An existing non-player character makes a surprise action. The next step, event meaning, will help determine what this character actually does.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('NPC'));
    },
  },
  {
    name: 'Introduce a new NPC',
    definition:
      'A brand new face is involved in the adventure. This may be someone the player characters had expected to meet, or a surprise. The character does not need to be an individual but can be any entity capable of independent action, such as an organized group of townspeople or a government agency.',
    selectItem(model: WorksheetModel) {
      const newNPC = model.items.add('NEW NPC', 'NPC');

      return newNPC;
    },
  },
  {
    name: 'Move toward a thread',
    definition:
      'This random event has something to do directly with resolving an open thread.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('Thread'));
    },
  },
  {
    name: 'Move away from a thread',
    definition:
      'This random event makes resovling a thread harder. Introduce a new aspect related to this thread that raises more questions.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('Thread'));
    },
  },
  {
    name: 'Close a thread',
    definition:
      'The random event is so important it actually closes an open thread. To close a thread, the thread is either resolved or the issue goes away. Figure out what the most logical way to immediately close the thread would be.',
    selectItem(model: WorksheetModel) {
      const item = oneRandomThing(model.items.fetchEnabled('Thread'));
      if (!!item) {
        item.enabled = false;
      }
      return item;
    },
  },
  {
    name: 'PC negative',
    definition: 'Something bad happens to a player character.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('PC'));
    },
  },
  {
    name: 'PC positive',
    definition: 'Something good happens to a player character.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('PC'));
    },
  },
  {
    name: 'Ambiguous event',
    definition:
      'The ambiguous event is meant to encompass everything else that can happen. This is a catchall category for anything that does not directly impact characters or NPCs. The event can be important, but often it is more atmospheric to the scene.',
    selectItem(model: WorksheetModel) {
      return null;
    },
  },
  {
    name: 'NPC negative',
    definition: 'Something bad happens to a non-player character.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('NPC'));
    },
  },
  {
    name: 'NPC positive',
    definition: 'Something good happens to a non-player character.',
    selectItem(model: WorksheetModel) {
      return oneRandomThing(model.items.fetchEnabled('NPC'));
    },
  },
];

export const WorksheetActions: IActionDefinition[] = [
  {
    name: 'Abandon',
    definition: 'Cease to support or look after (someone); desert.',
  },
  {
    name: 'Abuse',
    definition: 'Use (something) to bad effect or for a bad purpose; misuse.',
  },
  {
    name: 'Activity',
    definition: 'The condition in which things are happening or being done.',
  },
  {
    name: 'Adjourn',
    definition:
      'Break off (a meeting, legal case, or game) with the intention of resuming it later.',
  },
  { name: 'Adversity', definition: 'Difficulties; misfortune.' },
  {
    name: 'Agree',
    definition: 'Have the same opinion about something; concur.',
  },
  {
    name: 'Ambush',
    definition:
      'Make a surprise attack on (someone) from a concealed position.',
  },
  {
    name: 'Antagonize',
    definition: 'Cause (someone) to become hostile.',
  },
  {
    name: 'Arrive',
    definition:
      'Reach a place at the end of a journey or a stage in a journey.',
  },
  {
    name: 'Assist',
    definition: 'Help (someone), typically by doing a share of the work.',
  },
  { name: 'Attach', definition: 'Fasten; join.' },
  {
    name: 'Attainment',
    definition:
      'The action or fact of achieving a goal toward which one has worked.',
  },
  {
    name: 'Attract',
    definition:
      'Cause to come to a place or participate in a venture by offering something of interest, favorable conditions, or opportunities.',
  },
  {
    name: 'Befriend',
    definition: 'Act as a friend to (someone) by offering help or support.',
  },
  {
    name: 'Bestow',
    definition: 'Confer or present (an honor, right, or gift)',
  },
  {
    name: 'Betray',
    definition:
      "Expose (one's country, a group, or a person) to danger by treacherously giving information to an enemy.",
  },
  {
    name: 'Block',
    definition:
      'Make the movement or flow in (a passage, pipe, road, etc.) difficult or impossible.',
  },
  {
    name: 'Break',
    definition:
      'Separate or cause to separate into pieces as a result of a blow, shock, or strain.',
  },
  {
    name: 'Care',
    definition: 'Feel concern or interest; attach importance to something.',
  },
  {
    name: 'Carelessness',
    definition:
      'Failure to give sufficient attention to avoiding harm or errors; negligence.',
  },
  {
    name: 'Carry',
    definition:
      'Support and move (someone or something) from one place to another.',
  },
  {
    name: 'Celebrate',
    definition:
      'Acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity.',
  },
  { name: 'Change', definition: 'Make or become different.' },
  {
    name: 'Communicate',
    definition: 'Share or exchange information, news, or ideas.',
  },
  {
    name: 'Control',
    definition: 'Determine the behavior or supervise the running of.',
  },
  {
    name: 'Create',
    definition: 'Bring (something) into existence.',
  },
  {
    name: 'Cruelty',
    definition:
      'Callous indifference to or pleasure in causing pain and suffering.',
  },
  {
    name: 'Debase',
    definition: 'Reduce (something) in quality or value; degrade.',
  },
  {
    name: 'Deceive',
    definition:
      '(of a person) cause (someone) to believe something that is not true, typically in order to gain some personal advantage.',
  },
  {
    name: 'Decrease',
    definition:
      'Make or become smaller or fewer in size, amount, intensity, or degree.',
  },
  {
    name: 'Delay',
    definition: 'Make (someone or something) late or slow.',
  },
  {
    name: 'Desert',
    definition:
      'Abandon (a person, cause, or organization) in a way considered disloyal or treacherous.',
  },
  {
    name: 'Develop',
    definition:
      'Grow or cause to grow and become more mature, advanced, or elaborate.',
  },
  {
    name: 'Dispute',
    definition: 'Argue about (something); discuss heatedly.',
  },
  {
    name: 'Disrupt',
    definition:
      'Interrupt (an event, activity, or process) by causing a disturbance or problem.',
  },
  {
    name: 'Divide',
    definition: 'Separate or be separated into parts.',
  },
  {
    name: 'Dominate',
    definition: 'Have a commanding influence on; exercise control over.',
  },
  {
    name: 'Excitement',
    definition: 'A feeling of great enthusiasm and eagerness.',
  },
  {
    name: 'Expose',
    definition: 'Make (something) visible by uncovering it.',
  },
  {
    name: 'Extravagance',
    definition: 'Lack of restraint in spending money or use of resources.',
  },
  { name: 'Failure', definition: 'Lack of success.' },
  {
    name: 'Fight',
    definition:
      'Take part in a violent struggle involving the exchange of physical blows or the use of weapons.',
  },
  {
    name: 'Gratify',
    definition: 'Give (someone) pleasure or satisfaction.',
  },
  {
    name: 'Guide',
    definition: 'Show or indicate the way to (someone)',
  },
  {
    name: 'Haggle',
    definition:
      'Dispute or bargain persistently, especially over the cost of something.',
  },
  { name: 'Harm', definition: 'Physically injure.' },
  {
    name: 'Heal',
    definition:
      '(of a person or treatment) cause (a wound, injury, or person) to become sound or healthy again.',
  },
  { name: 'Imitate', definition: 'Take or follow as a model.' },
  {
    name: 'Imprison',
    definition: 'Put or keep in prison or a place like a prison.',
  },
  {
    name: 'Increase',
    definition: 'Become or make greater in size, amount, intensity, or degree.',
  },
  {
    name: 'Inform',
    definition: 'Give (someone) facts or information; tell.',
  },
  {
    name: 'Inquire',
    definition: 'Ask for information from someone.',
  },
  {
    name: 'Inspect',
    definition:
      'Look at (someone or something) closely, typically to assess their condition or to discover any shortcomings.',
  },
  {
    name: 'Intolerance',
    definition:
      "Unwillingness to accept views, beliefs, or behavior that differ from one's own.",
  },
  {
    name: 'Judge',
    definition: 'Form an opinion or conclusion about.',
  },
  {
    name: 'Kill',
    definition: 'Cause the death of (a person, animal, or other living thing)',
  },
  { name: 'Lie', definition: 'Tell a lie or lies.' },
  {
    name: 'Malice',
    definition: 'The intention or desire to do evil; ill will.',
  },
  {
    name: 'Mistrust',
    definition: 'Be suspicious of; have no confidence in.',
  },
  {
    name: 'Move',
    definition: 'Go in a specified direction or manner; change position.',
  },
  { name: 'Neglect', definition: 'Fail to care for properly.' },
  {
    name: 'Negligence',
    definition: 'Failure to take proper care in doing something.',
  },
  {
    name: 'Open',
    definition:
      'Move or adjust (a door or window) so as to leave a space allowing access and view.',
  },
  {
    name: 'Oppose',
    definition: 'Disapprove of and attempt to prevent, especially by argument.',
  },
  {
    name: 'Oppress',
    definition:
      'Keep (someone) in subservience and hardship, especially by the unjust exercise of authority.',
  },
  {
    name: 'Overindulge',
    definition:
      'Have too much of something enjoyable, especially food or drink.',
  },
  {
    name: 'Overthrow',
    definition: 'Remove forcibly from power.',
  },
  {
    name: 'Passion',
    definition: 'Strong and barely controllable emotion.',
  },
  {
    name: 'Persecute',
    definition:
      'Subject (someone) to hostility and ill-treatment, especially because of their race or political or religious beliefs.',
  },
  {
    name: 'Postpone',
    definition:
      'Cause or arrange for (something) to take place at a time later than that first scheduled.',
  },
  {
    name: 'Praise',
    definition: 'Express warm approval or admiration of.',
  },
  {
    name: 'Proceedings',
    definition:
      'An event or a series of activities involving a formal or set procedure.',
  },
  {
    name: 'Procrastinate',
    definition: 'Delay or postpone action; put off doing something.',
  },
  {
    name: 'Propose',
    definition:
      'Put forward (an idea or plan) for consideration or discussion by others.',
  },
  {
    name: 'Punish',
    definition:
      'Inflict a penalty or sanction on (someone) as retribution for an offense, especially a transgression of a legal or moral code.',
  },
  {
    name: 'Pursue',
    definition:
      'Follow (someone or something) in order to catch or attack them.',
  },
  {
    name: 'Recruit',
    definition: 'Enlist (someone) in the armed forces.',
  },
  {
    name: 'Refuse',
    definition: 'Indicate or show that one is not willing to do something.',
  },
  {
    name: 'Release',
    definition: 'Allow or enable to escape from confinement; set free.',
  },
  {
    name: 'Return',
    definition: 'Come or go back to a place or person.',
  },
  {
    name: 'Ruin',
    definition:
      'Reduce (a building or place) to a state of decay, collapse, or disintegration.',
  },
  { name: 'Separate', definition: 'Cause to move or be apart.' },
  {
    name: 'Spy',
    definition:
      'Work for a government or other organization by secretly collecting information about enemies or competitors.',
  },
  {
    name: 'Starting',
    definition:
      'Begin or be reckoned from a particular point in time or space; come into being.',
  },
  {
    name: 'Stop',
    definition:
      '(of an event, action, or process) come to an end; cease to happen.',
  },
  {
    name: 'Struggle',
    definition:
      'Make forceful or violent efforts to get free of restraint or constriction.',
  },
  {
    name: 'Take',
    definition: "Lay hold of (something) with one's hands; reach for and hold.",
  },
  {
    name: 'Transform',
    definition:
      'Make a thorough or dramatic change in the form, appearance, or character of.',
  },
  {
    name: 'Travel',
    definition:
      'Go from one place to another, typically over a distance of some length.',
  },
  {
    name: 'Trick',
    definition: 'Deceive or outwit (someone) by being cunning or skillful.',
  },
  {
    name: 'Triumph',
    definition: 'Achieve a victory; be successful.',
  },
  {
    name: 'Truce',
    definition:
      'An agreement between enemies or opponents to stop fighting or arguing for a certain time.',
  },
  {
    name: 'Trust',
    definition: 'Believe in the reliability, truth, ability, or strength of.',
  },
  {
    name: 'Usurp',
    definition:
      'Take (a position of power or importance) illegally or by force.',
  },
  {
    name: 'Vengeance',
    definition:
      'Punishment inflicted or retribution exacted for an injury or wrong.',
  },
  {
    name: 'Violate',
    definition: 'Break or fail to comply with (a rule or formal agreement)',
  },
  {
    name: 'Waste',
    definition: 'Use or expend carelessly, extravagantly, or to no purpose.',
  },
  {
    name: 'Work hard',
    definition: 'A great deal of effort or endurance.',
  },
];

export const WorksheetSubjects: IActionDefinition[] = [
  {
    name: 'Adversities',
    definition: 'A difficult or unpleasant situation.',
  },
  {
    name: 'Advice',
    definition:
      'Guidance or recommendations offered with regard to prudent future action.',
  },
  {
    name: 'Allies',
    definition:
      'A state formally cooperating with another for a military or other purpose.',
  },
  {
    name: 'Ambush',
    definition:
      'A surprise attack by people lying in wait in a concealed position.',
  },
  {
    name: 'Anger',
    definition: 'A strong feeling of annoyance, displeasure, or hostility.',
  },
  {
    name: 'Animals',
    definition:
      'A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.',
  },
  {
    name: 'Art',
    definition:
      'The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
  },
  {
    name: 'Attention',
    definition:
      'Notice taken of someone or something; the regarding of someone or something as interesting or important.',
  },
  {
    name: 'Balance',
    definition:
      'An even distribution of weight enabling someone or something to remain upright and steady.',
  },
  {
    name: 'Benefits',
    definition: 'An advantage or profit gained from something.',
  },
  {
    name: 'Burden',
    definition: 'A load, typically a heavy one.',
  },
  {
    name: 'Bureaucracy',
    definition:
      'A system of government in which most of the important decisions are made by state officials rather than by elected representatives.',
  },
  {
    name: 'Business',
    definition: "A person's regular occupation, profession, or trade.",
  },
  {
    name: 'Competition',
    definition: 'The activity or condition of competing.',
  },
  {
    name: 'Danger',
    definition: 'The possibility of suffering harm or injury.',
  },
  {
    name: 'Death',
    definition:
      'The action or fact of dying or being killed; the end of the life of a person or organism.',
  },
  {
    name: 'Dispute',
    definition: 'A disagreement, argument, or debate.',
  },
  {
    name: 'Disruption',
    definition:
      'Disturbance or problems which interrupt an event, activity, or process.',
  },
  {
    name: 'Dreams',
    definition:
      "A series of thoughts, images, and sensations occurring in a person's mind during sleep.",
  },
  {
    name: 'Elements',
    definition: 'An essential or characteristic part of something abstract.',
  },
  {
    name: 'Emotions',
    definition:
      "A strong feeling deriving from one's circumstances, mood, or relationships with others.",
  },
  {
    name: 'Enemies',
    definition:
      'A person who is actively opposed or hostile to someone or something.',
  },
  {
    name: 'Energy',
    definition:
      'The strength and vitality required for sustained physical or mental activity.',
  },
  {
    name: 'Environment',
    definition:
      'The surroundings or conditions in which a person, animal, or plant lives or operates.',
  },
  {
    name: 'Evil',
    definition:
      'Profound immorality and wickedness, especially when regarded as a supernatural force.',
  },
  {
    name: 'Expectations',
    definition: 'A strong belief that something will happen or be the case.',
  },
  {
    name: 'Extravagance',
    definition: 'Lack of restraint in spending money or use of resources.',
  },
  {
    name: 'Factor',
    definition:
      'A circumstance, fact, or influence that contributes to a result or outcome.',
  },
  { name: 'Failure', definition: 'Lack of success.' },
  {
    name: 'Fame',
    definition:
      'The state of being known or talked about by many people, especially on account of notable achievements.',
  },
  {
    name: 'Fears',
    definition:
      'An unpleasant emotion caused by the threat of danger, pain, or harm.',
  },
  {
    name: 'Food',
    definition:
      'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.',
  },
  {
    name: 'Friendship',
    definition:
      'The emotions or conduct of friends; the state of being friends.',
  },
  {
    name: 'Goals',
    definition:
      '(in soccer, rugby, hockey, and some other games) a pair of posts linked by a crossbar and typically with a net between, forming a space into or over which the ball has to be sent in order to score.',
  },
  {
    name: 'Good',
    definition: 'That which is morally right; righteousness.',
  },
  {
    name: 'Home',
    definition:
      'The place where one lives permanently, especially as a member of a family or household.',
  },
  {
    name: 'Hope',
    definition:
      'A feeling of expectation and desire for a certain thing to happen.',
  },
  {
    name: 'Ideas',
    definition: 'A thought or suggestion as to a possible course of action.',
  },
  {
    name: 'Illness',
    definition: 'A disease or period of sickness affecting the body or mind.',
  },
  {
    name: 'Illusions',
    definition:
      'An instance of a wrong or misinterpreted perception of a sensory experience.',
  },
  {
    name: 'Information',
    definition: 'Facts provided or learned about something or someone.',
  },
  {
    name: 'Innocent',
    definition: 'A pure, guileless, or naive person.',
  },
  {
    name: 'Inside',
    definition: 'The inner side or surface of something.',
  },
  {
    name: 'Intellectual',
    definition: 'A person possessing a highly developed intellect.',
  },
  {
    name: 'Intrigues',
    definition: 'The secret planning of something illicit or detrimental.',
  },
  {
    name: 'Investment',
    definition:
      'The action or process of investing money for profit or material result.',
  },
  {
    name: 'Jealousy',
    definition: 'The state or feeling of being jealous.',
  },
  {
    name: 'Joy',
    definition: 'A feeling of great pleasure and happiness.',
  },
  {
    name: 'Leadership',
    definition: 'The action of leading a group of people or an organization.',
  },
  {
    name: 'Legal',
    definition: 'Of, based on, or concerned with the law.',
  },
  {
    name: 'Liberty',
    definition:
      "The state of being free within society from oppressive restrictions imposed by authority on one's way of life, behavior, or political views.",
  },
  {
    name: 'Lies',
    definition: 'The way, direction, or position in which something lies.',
  },
  {
    name: 'Love',
    definition: 'An intense feeling of deep affection.',
  },
  {
    name: 'Magic',
    definition:
      'The power of apparently influencing the course of events by using mysterious or supernatural forces.',
  },
  {
    name: 'Masses',
    definition: 'A large body of matter with no definite shape.',
  },
  {
    name: 'Messages',
    definition:
      'A verbal, written, or recorded communication sent to or left for a recipient who cannot be contacted directly.',
  },
  {
    name: 'Military',
    definition: 'The armed forces of a country.',
  },
  { name: 'Misfortune', definition: 'Bad luck.' },
  {
    name: 'Mundane',
    definition: 'Lacking interest or excitement; dull.',
  },
  {
    name: 'Nature',
    definition:
      'The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth, as opposed to humans or human creations.',
  },
  {
    name: 'News',
    definition:
      'Newly received or noteworthy information, especially about recent or important events.',
  },
  {
    name: 'Opposition',
    definition: 'Resistance or dissent, expressed in action or argument.',
  },
  {
    name: 'Opulence',
    definition: 'Great wealth or luxuriousness.',
  },
  {
    name: 'Outside',
    definition: 'The external side or surface of something.',
  },
  {
    name: 'Pain',
    definition: 'Physical suffering or discomfort caused by illness or injury.',
  },
  {
    name: 'Path',
    definition:
      'A way or track laid down for walking or made by continual treading.',
  },
  {
    name: 'Peace',
    definition: 'Freedom from disturbance; tranquility.',
  },
  {
    name: 'Physical',
    definition: "A medical examination to determine a person's bodily fitness.",
  },
  {
    name: 'Plans',
    definition: 'A detailed proposal for doing or achieving something.',
  },
  {
    name: 'Pleasures',
    definition: 'A feeling of happy satisfaction and enjoyment.',
  },
  {
    name: 'Plot',
    definition:
      'A plan made in secret by a group of people to do something illegal or harmful.',
  },
  {
    name: 'Portals',
    definition:
      'A doorway, gate, or other entrance, especially a large and imposing one.',
  },
  {
    name: 'Possessions',
    definition: 'The state of having, owning, or controlling something.',
  },
  {
    name: 'Power',
    definition:
      'The ability to do something or act in a particular way, especially as a faculty or quality.',
  },
  {
    name: 'Prison',
    definition:
      'A building in which people are legally held as a punishment for a crime they have committed or while awaiting trial.',
  },
  {
    name: 'Project',
    definition:
      'An individual or collaborative enterprise that is carefully planned to achieve a particular aim.',
  },
  {
    name: 'Public',
    definition: 'Ordinary people in general; the community.',
  },
  {
    name: 'Randomness',
    definition:
      'The quality or state of lacking a pattern or principle of organization; unpredictability.',
  },
  {
    name: 'Reality',
    definition:
      'The world or the state of things as they actually exist, as opposed to an idealistic or notional idea of them.',
  },
  {
    name: 'Representative',
    definition:
      'A person chosen or appointed to act or speak for another or others.',
  },
  { name: 'Riches', definition: 'Material wealth.' },
  {
    name: 'Rumor',
    definition:
      'A currently circulating story or report of uncertain or doubtful truth.',
  },
  {
    name: 'Spiritual',
    definition:
      'A religious song of a kind associated with black Christians of the southern US, and thought to derive from the combination of European hymns and African musical elements by black slaves.',
  },
  {
    name: 'Stalemate',
    definition:
      'A situation in which further action or progress by opposing or competing parties seems impossible.',
  },
  {
    name: 'Status Quo',
    definition:
      'The existing state of affairs, especially regarding social or political issues.',
  },
  {
    name: 'Success',
    definition: 'The accomplishment of an aim or purpose.',
  },
  {
    name: 'Suffering',
    definition: 'The state of undergoing pain, distress, or hardship.',
  },
  {
    name: 'Tactics',
    definition:
      'An action or strategy carefully planned to achieve a specific end.',
  },
  {
    name: 'Technology',
    definition:
      'The application of scientific knowledge for practical purposes, especially in industry.',
  },
  {
    name: 'Tension',
    definition: 'The state of being stretched tight.',
  },
  { name: 'Travel', definition: 'The action of traveling.' },
  {
    name: 'Trials',
    definition:
      'A formal examination of evidence by a judge, typically before a jury, in order to decide guilt in a case of criminal or civil proceedings.',
  },
  {
    name: 'Vehicle',
    definition:
      'A thing used for transporting people or goods, especially on land, such as a car, truck, or cart.',
  },
  {
    name: 'Victory',
    definition:
      'An act of defeating an enemy or opponent in a battle, game, or other competition.',
  },
  {
    name: 'War',
    definition:
      'A state of armed conflict between different nations or states or different groups within a nation or state.',
  },
  {
    name: 'Weapons',
    definition:
      'A thing designed or used for inflicting bodily harm or physical damage.',
  },
  {
    name: 'Weather',
    definition:
      'The state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc.',
  },
  {
    name: 'Wishes',
    definition: 'A desire or hope for something to happen.',
  },
  {
    name: 'Wounds',
    definition:
      'An injury to living tissue caused by a cut, blow, or other impact, typically one in which the skin is cut or broken.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class WorksheetViewModelService {
  model = new WorksheetModel();

  constructor() {}

  load(): Observable<WorksheetModel> {
    return of(this.model);
  }
}
