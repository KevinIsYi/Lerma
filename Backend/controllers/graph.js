const Graph = require('../models/Graph');
const Item = require('../models/Items');

const printGraph = async (DBGraph) => {
    const translation = {
        "5fb16f8087ad632d3c43288e": "AB01",
        "5fb16f8087ad632d3c43288f": "AB02",
        "5fb16f8087ad632d3c432890": "AB03",
        "5fb16f8087ad632d3c432891": "AB04",
        "5fb16f8087ad632d3c432892": "AB05",
        "5fb16f8087ad632d3c432893": "AB06",
        "5fb16f8087ad632d3c432894": "AB07",
        "5fb16f8087ad632d3c432895": "AB08",
        "5fb16f8087ad632d3c432896": "AB09",
        "5fb16f8087ad632d3c432897": "AB10",
        "5fb16f8087ad632d3c432898": "L01",
        "5fb16f8087ad632d3c432899": "L02",
        "5fb16f8087ad632d3c43289a": "L03",
        "5fb16f8087ad632d3c43289b": "L04",
        "5fb16f8087ad632d3c43289c": "L05",
        "5fb16f8087ad632d3c43289d": "L06",
        "5fb16f8087ad632d3c43289e": "L07",
        "5fb16f8087ad632d3c43289f": "L08",
        "5fb16f8087ad632d3c4328a0": "L09",
        "5fb16f8087ad632d3c4328a1": "L10",
        "5fb16f8087ad632d3c4328a2": "E01",
        "5fb16f8087ad632d3c4328a3": "E02",
        "5fb16f8087ad632d3c4328a4": "E03",
        "5fb16f8087ad632d3c4328a5": "E04",
        "5fb16f8087ad632d3c4328a6": "E05",
        "5fb16f8087ad632d3c4328a7": "E06",
        "5fb16f8087ad632d3c4328a8": "E07",
        "5fb16f8087ad632d3c4328a9": "E08",
        "5fb16f8087ad632d3c4328aa": "E09",
        "5fb16f8087ad632d3c4328ab": "E10",
        "5fb16f8087ad632d3c4328ac": "HC01",
        "5fb16f8087ad632d3c4328ad": "HC02",
        "5fb16f8087ad632d3c4328ae": "HC03",
        "5fb16f8087ad632d3c4328af": "HC04",
        "5fb16f8087ad632d3c4328b0": "HC05",
        "5fb16f8087ad632d3c4328b1": "HC06",
        "5fb16f8087ad632d3c4328b2": "HC07",
        "5fb16f8087ad632d3c4328b3": "HC08",
        "5fb16f8087ad632d3c4328b4": "HC09",
        "5fb16f8087ad632d3c4328b5": "HC10",
        "5fb16f8087ad632d3c4328b6": "D01",
        "5fb16f8087ad632d3c4328b7": "D02",
        "5fb16f8087ad632d3c4328b8": "D03",
        "5fb16f8087ad632d3c4328b9": "D04",
        "5fb16f8087ad632d3c4328ba": "D05",
        "5fb16f8087ad632d3c4328bb": "D06",
        "5fb16f8087ad632d3c4328bc": "D07",
        "5fb16f8087ad632d3c4328bd": "D08",
        "5fb16f8087ad632d3c4328be": "D09",
        "5fb16f8087ad632d3c4328bf": "D10"
    }

    DBGraph.forEach(({ item1, item2, weight }) => {
        console.log(`(${ translation[item1] }, ${ translation[item2] }, ${ weight })`);
    });
    console.log('/******************/');
}

const updateGraph = async ( purchases ) => {
    const len = purchases.length;
    const graph = {};

    for (let i = 0 ; i < len ; ++i) { // Graph connection
        for (let j = i + 1 ; j < len ; ++j) {
            if (!graph[purchases[i]._id]) {
                graph[purchases[i]._id] = new Set();
            }
            graph[purchases[i]._id].add(purchases[j]._id);
        }
    }

    const DBGraph = await Graph.find({});
    const auxGraph = DBGraph;
    for (const id in graph) {
        graph[id].forEach(async element => {
            const edge = DBGraph.find(({ item1, item2 }) => (item1 === id || item2 === id) && (item1 === element || item2 === element));

            if (!edge) {
                const newEdge = new Graph({ item1: id, item2: element, weight: 1 });
                auxGraph.push({ item1: id, item2: element, weight: 1 });
                await newEdge.save();
            }
            else {
                const { _id, weight } = edge;
                edge.weight = weight + 1;

                auxGraph.map(curr => curr.item1 === element || curr.item1 === id ? { ...edge } : element);

                await Graph.findByIdAndUpdate(_id, { ...edge });
            }
        });
    }

    printGraph(auxGraph);
    
}

const getGraph = async (req, res) => {
    try {
        const { body:{ scitems } } = req;
        const graph = {};
        for (const itemID of scitems) {
            const items = await Graph.find({
                '$or': [
                    {
                        'item1': itemID
                    },
                    {
                        'item2': itemID
                    }
                ]
            });
            
            items.forEach(({ item1, item2, weight }) => {
                const recommendationItemId = item1 === itemID ? item2 : item1;
                if (!graph[recommendationItemId]) {
                    graph[recommendationItemId] = weight;
                }
                else {
                    graph[recommendationItemId]++;
                }  
            });
        }; 

        const items = [];
        for (const id in graph) {
            const item = await Item.findById(id);
            items.push({ item, weight: graph[id] });
        }

        res.json({
            ok: true,
            items
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed at fetching from DB'
        })
    }
}

module.exports = {
    updateGraph,
    getGraph
};