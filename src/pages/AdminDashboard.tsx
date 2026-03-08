import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LogOut, Users, Eye, Globe, Search, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SiteVisit {
  id: string;
  visitor_email: string | null;
  session_id: string;
  page_url: string;
  section_viewed: string | null;
  user_agent: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchVisits = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('site_visits')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(500);

    if (error) {
      toast({ title: 'Error fetching visits', description: error.message, variant: 'destructive' });
    } else {
      setVisits(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Verify admin access
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/adminlogin');
        return;
      }
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        await supabase.auth.signOut();
        navigate('/adminlogin');
        return;
      }
      fetchVisits();
    };
    checkAdmin();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/adminlogin');
  };

  const filteredVisits = visits.filter(v =>
    (v.visitor_email?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (v.section_viewed?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    v.page_url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats
  const uniqueEmails = new Set(visits.filter(v => v.visitor_email).map(v => v.visitor_email)).size;
  const uniqueSessions = new Set(visits.map(v => v.session_id)).size;
  const topSections = visits.reduce((acc, v) => {
    if (v.section_viewed) {
      acc[v.section_viewed] = (acc[v.section_viewed] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const sortedSections = Object.entries(topSections).sort((a, b) => b[1] - a[1]).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Visitor Analytics</h1>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{visits.length}</p>
                  <p className="text-sm text-muted-foreground">Total Page Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{uniqueEmails}</p>
                  <p className="text-sm text-muted-foreground">Unique Visitors (by email)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Globe className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{uniqueSessions}</p>
                  <p className="text-sm text-muted-foreground">Unique Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Sections */}
        {sortedSections.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Most Viewed Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {sortedSections.map(([section, count]) => (
                  <Badge key={section} variant="secondary" className="text-sm px-3 py-1">
                    {section}: {count} views
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Visits Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg">Visitor Log</CardTitle>
                <CardDescription>{filteredVisits.length} entries</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by email, section..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="outline" size="icon" onClick={fetchVisits} disabled={loading}>
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Section Viewed</TableHead>
                    <TableHead>Page</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVisits.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        {loading ? 'Loading...' : 'No visits recorded yet'}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredVisits.map((visit) => (
                      <TableRow key={visit.id}>
                        <TableCell className="font-medium">
                          {visit.visitor_email || <span className="text-muted-foreground italic">Anonymous</span>}
                        </TableCell>
                        <TableCell>
                          {visit.section_viewed ? (
                            <Badge variant="outline">{visit.section_viewed}</Badge>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">{visit.page_url}</TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          {new Date(visit.created_at).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
