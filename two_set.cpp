#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h> 
#include <complex>
#include <queue>
#include <set>
#include <unordered_set>
#include <list>
#include <chrono>
#include <random>
#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>
#include <vector>
#include <map>
#include <unordered_map>
#include <stack>
#include <iomanip>
#include <fstream>
 
using namespace std;
 
typedef long long ll;
typedef long double ld;
typedef pair<int,int> p32;
typedef pair<ll,ll> p64;
typedef pair<double,double> pdd;
typedef vector<ll> v64;
typedef vector<int> v32;
typedef vector<vector<int> > vv32;
typedef vector<vector<ll> > vv64;
typedef vector<vector<p64> > vvp64;
typedef vector<p64> vp64;
typedef vector<p32> vp32;
ll MOD = 998244353;
double eps = 1e-12;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define forsn(i,s,e) for(ll i = s; i < e; i++)
#define rforn(i,s) for(ll i = s; i >= 0; i--)
#define rforsn(i,s,e) for(ll i = s; i >= e; i--)
#define ln "\n"
#define dbg(x) cout<<#x<<" = "<<x<<ln
#define mp make_pair
#define pb push_back
#define fi first
#define se second
#define INF 2e18
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define all(x) (x).begin(), (x).end()
#define sz(x) ((ll)(x).size())
 

void solve(){
    int n;
    cin>>n;
    vector<ll>v1;
    vector<ll>v2;
    ll sum=0;

    int a[n+1];
    a[0]=0;

    for(int i=1;i<n+1;i++){
        a[i]=i;
        sum+=i;
    }

    string ans="";
    if(sum%2==0){
            if(n%4==0){
                ans="YES";
                for(int i=1;i<=n/4;i++){
                    v1.pb(i);
                }
                for(int i=0;i<n/4;i++){
                    v1.pb(a[n-i]);
                }
                for(int i=n/4+1;i<v1[v1.size()-1];i++){
                    v2.pb(i);
                }
            }else if(n%4==3){
                vector<ll>v;
                ans="YES";

                for(int i=4;i<n+1;i++){
                    v.pb(i);
                }
                v1.pb(1);v1.pb(2);v2.pb(3);

                for(int i=0;i<(n-3)/4;i++){
                    v1.pb(v[i]);
                    v1.pb(v[v.size()-1-i]);
                }
                for(int i=4+(n-3)/4;i<=n-(n-3)/4;i++){
                    v2.pb(i);
                }
            }
            else {
                ans="NO";
            }
     }else{
        ans="NO";
     }

     if(ans=="YES"){
        cout<<ans<<endl;
        cout<<v1.size()<<endl;
        forn(i,v1.size()) cout<<v1[i]<<" ";
        cout<<endl;
        cout<<v2.size()<<endl;
        forn(i,v2.size()) cout<<v2[i]<<" ";

     }else if(ans=="NO") cout<<ans<<endl;






}
int main()
{
 fast_cin();
    solve();
 return 0;
}