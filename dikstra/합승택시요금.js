// 태식

// import java.util.*;

// class Solution {

//     static final int MAX_FARE = 20000001; // 200 * 100000 + 1
//     static List<List<Edge>> graph;

//     public int solution(int n, int s, int a, int b, int[][] fares) {
//         int answer = Integer.MAX_VALUE;

//         // 그래프 초기화
//         graph = new ArrayList<>();
//         for(int i = 0 ; i <= n ; i ++){
//             graph.add(new ArrayList<>());
//         }

//         for(int[] i : fares){
//             graph.get(i[0]).add(new Edge(i[1], i[2]));
//             graph.get(i[1]).add(new Edge(i[0], i[2]));
//         }

//         int[] aFares = new int[n + 1];
//         int[] bFares = new int[n + 1];
//         int[] commonFares = new int[n + 1];

//         Arrays.fill(aFares, MAX_FARE);
//         Arrays.fill(bFares, MAX_FARE);
//         Arrays.fill(commonFares, MAX_FARE);

//         // 다익스트라
//         aFares = dijkstra(a, aFares);
//         bFares = dijkstra(b, bFares);
//         commonFares = dijkstra(s, commonFares);

//         // 최소요금 계산
//         for(int i = 1; i <= n ; i ++) {
//             int iFare = aFares[i] + bFares[i] + commonFares[i]; // (s -> i) + (i -> a) + (i -> b)
//             answer = Math.min(answer, iFare);
//         }
//         return answer;
//     }

//     static int[] dijkstra (int start, int[] costs) {
//         PriorityQueue<Edge> pq = new PriorityQueue<>();
//         pq.offer(new Edge(start, 0));
//         costs[start] = 0;

//         while (!pq.isEmpty()) {
//             Edge edge = pq.poll();
//             int vertex = edge.vertex;
//             int cost = edge.cost;

//             if(cost > costs[vertex]) {
//                 continue;
//             }

//             List<Edge> edges = graph.get(vertex);
//             for (Edge nEdge : edges) {
//                 int nVertex = nEdge.vertex;
//                 int nCost = costs[vertex] + nEdge.cost;

//                 if (nCost < costs[nVertex]) {
//                     costs[nVertex] = nCost;
//                     pq.offer(new Edge(nVertex, nCost));
//                 }
//             }
//         }
//         return costs;
//     }

// }

// class Edge implements Comparable<Edge>{

//     int vertex;
//     int cost;

//     Edge(int vertex, int cost){
//         this.vertex = vertex;
//         this.cost = cost;
//     }

//     @Override
//     public int compareTo(Edge e){
//         return this.cost - e.cost;
//     }

// }
