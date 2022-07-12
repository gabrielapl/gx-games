export enum RankType {
  bronze = "bronze",
  silver = "silver",
  gold = "gold",
  diamond = "diamond",
  emerald = "emerald"
}

interface Rank {
  name: RankType;
  minXP: number;
  maxXP: number;
}

const ranks: Rank[] = [
  {
    name: RankType.bronze,
    minXP: 0,
    maxXP: 1000
  },
  {
    name: RankType.silver,
    minXP: 1001,
    maxXP: 2500
  },
  {
    name: RankType.gold,
    minXP: 2501,
    maxXP: 5000
  },
  {
    name: RankType.diamond,
    minXP: 5001,
    maxXP: 8000
  },
  {
    name: RankType.emerald,
    minXP: 8001,
    maxXP: Infinity
  }
];

export class RankFormatter {

  private name: RankType;
  private minXP: number;
  private maxXP: number;
  private xp: number;

  constructor(xp: number) {
    const rankFormatter = this.rankCalc(xp);
    
    this.name = rankFormatter.name;
    this.minXP = rankFormatter.minXP;
    this.maxXP = rankFormatter.maxXP;
    this.xp = xp;
  }

  rankCalc(xp: number) {

    let rankFormatted: Rank = {} as Rank

    ranks.forEach(rank => {
      if (xp >= rank.minXP && xp <= rank.maxXP) {
        rankFormatted = rank;
      }
    });

    return rankFormatted;
  }
}
